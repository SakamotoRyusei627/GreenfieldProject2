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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
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
});

const API_KEY = process.env.OPENAI_API_KEY;
const URL = "https://api.openai.com/v1/chat/completions";
const { Configuration, OpenAIApi } = require("openai");
// .envからの読み込みに必要
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "牛乳1000mlと卵4個だけを使用するレシピを3つ教えて下さい。それぞれのレシピで使用した分量を引いたキーバリューペアのオブジェクトも返してください。",
      },
    ],
  });
  console.log(completion.data.choices[0].message);
})();

// content:案
// {材料オブジェクト}　を使って{人数}分の献立のレシピを１種類、教えて下さい。
// app.tsx
// フォーム入力欄、送信ボタン、返答出力欄を追加

// server.js
// postメソッドでrelpy関数を作成
// フォーム入力欄に入力されたテキストを
// 送信ボタンを押すとrelpy関数に引数として渡す
// 返答出力欄にレスポンスを表示する

// const API_KEY = process.env.OPENAI_API_KEY;

// const URL = "https://api.openai.com/v1/chat/completions";

// function reply() {
//   const text = document.getElementsByClassName("request_text").value;
//   async function getResponse() {
//     try {
//       const response = await axios.post(
//         URL,
//         {
//           model: "gpt-3.5-turbo",
//           messages: [
//             {
//               role: "user",
//               content: "牛肉1パックと玉ねぎ1個で2人分の献立のレシピを教えて",
//             },
//           ],
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: Bearer`${API_KEY}`,
//           },
//         }
//       );
//       const chatgpt_response = response.data.choices[0].message.content;
//       $("#response_text").val(chatgpt_response);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   getResponse();
// }

///choiseの中身
//{
//     "id":"chatcmpl-abc123",
//     "object":"chat.completion",
//     "created":1677858242,
//     "model":"gpt-3.5-turbo-0301",
//     "usage":{
//        "prompt_tokens":13,
//        "completion_tokens":7,
//        "total_tokens":20
//     },
//     "choices":[
//        {
//           "message":{
//              "role":"assistant",
//              "content":"\n\nThis is a test!"
//           },
//           "finish_reason":"stop",
//           "index":0
//        }
//     ]
//  }

// sudo npm install -g nodemon

// nodemon index.js

// {
//     dishes: ["ゴーヤチャンプルーザマス", "ステーキザマス"],
//     "cooking-date": "2023/5/2",
// }
// }
