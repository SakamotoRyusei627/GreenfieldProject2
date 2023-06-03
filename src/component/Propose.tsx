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
  ] = useContext(SetVariableArray);

  return (
    <>
      <h1>Propose</h1>
      <ul>
        {message.map((elem, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setButtonArray([
                  { text: "次へ", flag: 1, func: async () => {
                      console.log(choice)
                      const result = choice.map(food => {
                        if(food["expiration-date"] === "-") food["expiration-date"] = null;
                        return food;
                      });
                      console.log(result);
                      const fetchData = await fetch(
                        `/deleteFood/sazaezamasu`,
                        // `http://localhost:3333/deleteFood/sazaezamasu`,
                        {
                          method: "DELETE",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(result),
                        }
                      );
                      const postData = await fetch(
                        `/previousCook/sazaezamasu`,
                        // `http://localhost:3333/previousCook/sazaezamasu`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(elem),
                        }
                      );
                    }
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
    </>
  );
}
