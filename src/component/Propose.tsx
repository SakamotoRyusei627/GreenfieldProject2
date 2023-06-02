import React, { useState, useContext } from "react";
import { FlagContext } from "./App";
import { SetVariableArray } from "./common/Main";

// type Props = {
//   setDetailedRecipeFlag: React.Dispatch<React.SetStateAction<boolean>>;
// };

export default function Propose() {
  const [, setFlag] = useContext(FlagContext);
  const [setButtonArray, buttonArray, , setChoice] =
    useContext(SetVariableArray);
  const recipeList = [
    { name: "カレーライス" },
    { name: "オムライス" },
    { name: "ハンバーグ" },
  ];
  return (
    <>
      <h1>Propose</h1>
      <ul>
        {recipeList.map((elem, index) => {
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
              }}
            >
              {elem.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
