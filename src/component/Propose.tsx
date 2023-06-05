import React, { useState, useContext } from "react";
import { FlagContext } from "./App";
import { SetVariableArray } from "./common/Main";

// type Props = {
//   setSelectMessage: React.Dispatch<React.SetStateAction<any>>;
// };

export default function Propose() {
  // const { setSelectMessage } = props;
  // console.log("setSelectMessage", setSelectMessage);

  const [, setFlag] = useContext(FlagContext);
  const [
    setButtonArray,
    buttonArray,
    choice,
    setChoice,
    message,
    setMessage,
    resistFood,
    setResistFood,
    // 追加
    selectMessage,
    setSelectMessage,
    setCookList,
  ] = useContext(SetVariableArray);
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <h1>Propose</h1>
      {message.length === 0 ? (
        <p>待機中</p>
      ) : (
        <ul>
          {message.map((elem, index) => {
            return (
              <li
                key={index}
                onClick={async () => {
                  setButtonArray([
                    {
                      text: "次へ",
                      flag: 1,
                      func: async () => {
                        console.log("choice", choice);

                        const result = choice.map((food) => {
                          if (food["expiration-date"] === "-")
                            food["expiration-date"] = null;
                          return food;
                        });
                        console.log(result);
                        await fetch(
                          // `/deleteFood/sazaezamasu`,
                          `http://localhost:3333/deleteFood/sazaezamasu`,
                          {
                            method: "DELETE",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(result),
                          }
                        );
                        fetch(
                          // `/previousCook/sazaezamasu`,
                          `http://localhost:3333/previousCook/sazaezamasu`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(elem),
                          }
                        );
                        setMessage([]);

                        //追加
                        // const postData = await fetch(
                        //   // `/previousCook/sazaezamasu`,
                        //   `http://localhost:3333/previousCook/sazaezamasu`,
                        //   {
                        //     method: "POST",
                        //     headers: {
                        //       "Content-Type": "application/json",
                        //     },
                        //     body: JSON.stringify(elem),
                        //   }
                        // );

                        // Promise.all([postData, deleteFood])
                        //   .then(() => {
                        //     console.log("😩😩😩😩😩😩😩Promise😩😩😩😩😩😩😩");
                        //     setFlag(1);
                        //   })
                        //   .catch(() => console.log("エラー----------------"));

                        // //食材消す
                        // const fetchData = await fetch(
                        //   // `/deleteFood/sazaezamasu`,
                        //   `http://localhost:3333/deleteFood/sazaezamasu`,
                        //   {
                        //     method: "DELETE",
                        //     headers: {
                        //       "Content-Type": "application/json",
                        //     },
                        //     body: JSON.stringify(result),
                        //   }
                        // ).then(() => {
                        //   console.log("##################################");

                        setFlag(6);
                        // });
                        // Promise.all([postData, fetchData]).then(() => {
                        //   console.log("🥺Promise.all");
                        // });

                        // console.log(postData);
                      },
                    },
                    { text: "戻る", flag: 5, func: () => {} },
                  ]);
                  console.log("ここでGPT詳細な作り方を聞く？");
                  console.log(elem);

                  console.log("それか相談のタイミングのやつを使う");
                  setSelectMessage(elem);
                  setFlag(6);
                }}
              >
                {elem.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
