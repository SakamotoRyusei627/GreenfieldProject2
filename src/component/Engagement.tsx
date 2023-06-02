import React, { useState, useContext } from "react";
import { SetVariableArray } from "./common/Main";

// type Props = {
//   selectMessage: any;
// };

export default function Engagement() {
  // const { selectMessage } = props;
  // const [setButtonArray, buttonArray, choice, setChoice] =
  //   useContext(SetVariableArray);
  // console.log("Engagement", selectMessage);
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
      <h1>Engagement</h1>
      {selectMessage.list.map((elem: string, index: number) => {
        return <p key={index}>{elem}</p>;
      })}
    </>
  );
}
