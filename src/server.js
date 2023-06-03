const express = require("express");
const app = express();
const port = 3333;
const knex = require("./db/index");

// npm run migrate-latest && npm run seed-data && 

app.use(express.static('build'));
// app.use("/", express.static(__dirname + "/public"));

const arrangeDate = (e, key) => {
  return (
    e[key].getFullYear() +
    "-" +
    (e[key].getMonth() + 1) +
    "-" +
    e[key].getDate()
  );
};

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/food/:loginID", async (req, res) => {
  const data = await knex
    .select("*")
    .from("GF_food")
    .where({ "login-id_f": req.params.loginID })
    .then((e) => e);
  const newdata = data.map((e) =>
    e["expiration-date"] !== null
      ? {
          ...e,
          "registration-date": arrangeDate(e, "registration-date"),
          "expiration-date": arrangeDate(e, "expiration-date"),
        }
      : {
          ...e,
          "registration-date": arrangeDate(e, "registration-date"),
          "expiration-date": "-",
        }
  );
  res.status(200);
  res.send(newdata);
});

app.get("/previousCook/:loginID", async (req, res) => {
  const data = await knex
    .select("*")
    .from("GF_previousCook")
    .where({ "login-id_p": req.params.loginID })
    .then((e) => e);
  const newdata = data.map((e) => ({
    ...e,
    "cooking-date": arrangeDate(e, "cooking-date"),
  }));
  const keys = [...new Set(newdata.map((e) => e["cooking-date"]))];
  const result = keys.reduce((init, val) => {
    return [
      ...init,
      {
        "cooking-date": val,
        dishes: newdata
          .filter((e) => e["cooking-date"] === val)
          .map((e) => e.dishes),
      },
    ];
  }, []);
  res.status(200);
  res.send(result);
  // {cooking-date: '2023-5-20', dishes: Array(2)}
  // dishes(2) ['ゴーヤチャンプルーザマス', '豆腐炒めザマス']
});

app.post("/food/:loginID", async (req, res) => {
  const body = {
    // id: 25,
    "food-name": "マンゴー",
    quantity: 1,
    "quantity-unit": "個",
    "registration-date": "2023-6-2",
    "expiration-date": "2023-6-13",
    "login-id_f": "sazaezamasu",
  };

  console.log(req.body.map(food => {
    food["login-id_f"] = req.params.loginID
    return food;
  }));

  await req.body
  .map(food => {
    food["login-id_f"] = req.params.loginID
    return food;
  })
  .forEach(async food => {
    food["food-name"] &&
    await knex("GF_food").insert(food);
  })

  res.set("content-type", "application/json").status(200).send(req.body);
});

app.post("/previousCook/:loginID", async (req, res) => {
  const body = {
    "cooking-date": arrangeDate([new Date()], 0),
    dishes: "ザマス--------",
    "login-id_p": "sazaezamasu",
  };

  // await knex("GF_previousCook").del().where(body);
  // await knex("GF_previousCook").insert(body);

  const result = await fetch(
    // "/previousCook/sazaezamasu"
    "http://localhost:3333/previousCook/sazaezamasu"
  ).then((e) => e.json());

  res.set("content-type", "application/json").status(200).send(result);
});

app.delete("/deleteFood/:loginID", async (req, res) => {
  console.log(req.body);
  req.body.forEach(async food => {
    await knex("GF_food").del().where(food);
  })
})

app.post("/Propose/", async (req, res) => {
  const countOfPeople = req.body.countOfPeople;
  console.log("countOfPeople", countOfPeople);
  const arrFoods = req.body.arrFoods;
  console.log("arrFoods", arrFoods);
  //1=>GPT起動,2=>GPT停止
  const set = 2;
  switch (set) {
    case 1:
      console.log("GPT起動");
      //GPT
      // .envからの読み込みに必要
      // ###########################################
      require("dotenv").config();
      const API_KEY = process.env.OPENAI_API_KEY;

      try {
        const URL = "https://api.openai.com/v1/chat/completions";
        const countOfPeople = req.body.countOfPeople;
        console.log("countOfPeople", countOfPeople);
        const arrFoods = req.body.arrFoods;
        console.log("arrFoods", arrFoods);
        console.log({ arrFoods });
        const strJoinFoods = arrFoods.reduce((acc, food) => {
          const unit = food["quantity-unit"].split("/")[0];
          const joinList = `${food["food-name"]}${food["quantity"]}${unit}`;
          return acc === "" ? `${joinList}` : `${acc},${joinList}`;
        }, "");
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
          apiKey: API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const fetchResult = (async () => {
          const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `あなたは、ザマス口調の優秀なシェフです。
            # 制約条件 #
            ・${strJoinFoods}で${countOfPeople}人分の献立のレシピを３つ
            ・{title,material,list}
            ・title:料理名
            ・material:材料
            ・list:手順
            ・上記オブジェクトを配列形式で格納
            `,
              },
            ],
          });
          return completion.data.choices[0].message;
        })();
        fetchResult.then((result) => {
          console.log(result.content);
          res.set("content-type", "application/json");
          res.status(200);
          res.send(result.content);
          // res.send(JSON.stringify(result.content));
        });
      } catch (e) {
        console.log("エラー");
      }
      break;

    case 2:
      // ###########################################
      console.log("GPT停止中");
      const body = [
        {
          title: "ドラゴンボールカレー",
          material: [
            "じゃがいも 2個",
            "鶏ムネ肉 500g",
            "たまねぎ 1個",
            "にんじん 1本",
            "カレールー 1箱",
          ],
          list: [
            "1. じゃがいも、たまねぎ、にんじんを一口サイズに切る。",
            "2. 鶏ムネ肉を一口サイズに切り、塩胡椒を振る。",
            "3. 鍋に油を熱し、鶏肉を炒める。",
            "4. 野菜を加え、しんなりするまで炒める。",
            "5. 水を加え、ひと煮立ちさせる。",
            "6. カレールーを投入し、とろみが出るまで煮込む。",
          ],
        },
        {
          title: "超サイヤ人のオムライス",
          material: [
            "じゃがいも 2個",
            "鶏ムネ肉 500g",
            "玉ねぎ 1個",
            "卵 4個",
            "ごはん 2合",
            "バター 20g",
            "ケチャップ 適量",
          ],
          list: [
            "1. じゃがいもを湯がいてマッシュする。",
            "2. 鶏ムネ肉を一口サイズに切り、塩胡椒を振る。",
            "3. 鍋に油を熱し、鶏肉を炒める。",
            "4. 玉ねぎを加え、透き通るまで炒める。",
            "5. ご飯を加え、よく混ぜる。",
            "6. フライパンにバターを入れ、2つの卵を溶いておく。",
            "7. 卵を流し入れ、中火で薄焼き卵を作る。",
            "8. 6をお皿に盛りつけ、7を巻いてのせる。",
            "9. ケチャップを適量かける。",
          ],
        },
        {
          title: "超神水風コロッケ",
          material: [
            "じゃがいも 2個",
            "鶏ムネ肉 500g",
            "たまねぎ 1個",
            "卵 1個",
            "パン粉 適量",
            "油 適量",
            "塩胡椒 少々",
          ],
          list: [
            "1. じゃがいもを湯がいてマッシュする。",
            "2. 鶏ムネ肉を鍋で茹で、細かく断ち切る。",
            "3. 玉ねぎをみじん切りにして、バターで炒める。",
            "4. 1,2,3を混ぜ、塩胡椒で味付けをする。",
            "5. 4に卵を入れて混ぜ、小さく丸める。",
            "6. 少し丸めたら、平らに潰してコロッケの形に整える。",
            "7. パン粉を付け、油で揚げる。",
          ],
        },
      ];
      console.log(JSON.stringify(body));
      res.status(200);
      res.send(JSON.stringify(body));
      break;
    default:
      console.log("該当なし");
  }
});


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`server started @:${port}`);
});
