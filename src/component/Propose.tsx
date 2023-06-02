import React, { useState, useContext } from "react";
import { FlagContext } from "./App";
import { SetVariableArray } from "./common/Main";

type Props = {
  setSelectMessage: React.Dispatch<React.SetStateAction<any>>;
};

export default function Propose(props: Props) {
  const { setSelectMessage } = props;
  const [, setFlag] = useContext(FlagContext);
  const [setButtonArray, buttonArray, , setChoice, message] =
    useContext(SetVariableArray);

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
                setFlag(6);
                console.log("ここでGPT詳細な作り方を聞く？");
                console.log("それか相談のタイミングのやつを使う");
                setSelectMessage(elem);
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
