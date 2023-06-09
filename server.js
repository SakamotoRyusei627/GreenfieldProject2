const express = require("express");
const app = express();
const port = 3333;
const knex = require("./src/db/index");

const arrangeDate = (e, key) => {
  return (
    e[key].getFullYear() +
    "-" +
    (e[key].getMonth() + 1) +
    "-" +
    e[key].getDate()
  );
};

app.listen(port, () => {
  console.log(`server started @:${port}`);
});

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
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

  await knex("GF_food").insert(body);

  res.set("content-type", "application/json").status(200).send(body);
});

app.post("/previousCook/:loginID", async (req, res) => {
  const body = {
    "cooking-date": arrangeDate([new Date()], 0),
    dishes: "ザマス--------",
    "login-id_p": "sazaezamasu",
  };

  // await knex("GF_previousCook").del().where(body);
  await knex("GF_previousCook").insert(body);

  const result = await fetch(
    "http://localhost:3333/previousCook/sazaezamasu"
  ).then((e) => e.json());

  res.set("content-type", "application/json").status(200).send(result);
});

app.post("/Propose/", async (req, res) => {
  const countOfPeople = req.body.countOfPeople;
  console.log("countOfPeople", countOfPeople);
  const arrFoods = req.body.arrFoods;
  console.log("arrFoods", arrFoods);

  // .envからの読み込みに必要
  // // ###########################################
  //   require("dotenv").config();
  //   const API_KEY = process.env.OPENAI_API_KEY;

  //   try {
  //     const URL = "https://api.openai.com/v1/chat/completions";
  //     const countOfPeople = req.body.countOfPeople;
  //     console.log("countOfPeople", countOfPeople);
  //     const arrFoods = req.body.arrFoods;
  //     console.log("arrFoods", arrFoods);
  //     console.log({ arrFoods });
  //     const strJoinFoods = arrFoods.reduce((acc, food) => {
  //       const unit = food["quantity-unit"].split("/")[0];
  //       const joinList = `${food["food-name"]}${food["quantity"]}${unit}`;
  //       return acc === "" ? `${joinList}` : `${acc},${joinList}`;
  //     }, "");
  //     const { Configuration, OpenAIApi } = require("openai");
  //     const configuration = new Configuration({
  //       apiKey: API_KEY,
  //     });
  //     const openai = new OpenAIApi(configuration);
  //     const fetchResult = (async () => {
  //       const completion = await openai.createChatCompletion({
  //         model: "gpt-3.5-turbo",
  //         messages: [
  //           {
  //             role: "user",
  //             content: `あなたは、ザマス口調の優秀なシェフです。
  //           # 制約条件 #
  //           ・${strJoinFoods}で${countOfPeople}人分の献立のレシピを３つ
  //           ・{title,material,list}
  //           ・title:料理名
  //           ・material:材料
  //           ・list:手順
  //           ・上記オブジェクトを配列形式で格納
  //           `,
  //           },
  //         ],
  //       });
  //       return completion.data.choices[0].message;
  //     })();
  //     fetchResult.then((result) => {
  //       console.log(result.content);
  //       res.set("content-type", "application/json");
  //       res.status(200);
  //       res.send(result.content);
  //     });
  //   } catch (e) {
  //     console.log("エラー");
  //   }
  // // ###########################################
  res.status(200);
  res.send(JSON.stringify({ a: "AAA" }));
});
