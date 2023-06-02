import React, { useState, useContext } from "react";
import { SetVariableArray } from "./common/Main";

type Props = {
  selectMessage: any;
};

export default function Engagement(props: Props) {
  const { selectMessage } = props;
  const [setButtonArray, buttonArray, choice, setChoice] =
    useContext(SetVariableArray);
  return (
    <>
      <h1>Engagement</h1>
      {selectMessage.list.map((elem: string, index: number) => {
        return <p key={index}>{elem}</p>;
      })}
    </>
  );
}
