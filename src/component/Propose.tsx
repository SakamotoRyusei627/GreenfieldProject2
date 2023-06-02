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
                  { text: "次へ", flag: 1, func: () => {} },
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
