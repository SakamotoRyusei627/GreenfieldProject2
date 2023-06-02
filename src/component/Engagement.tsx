import React, { useState, useContext } from "react";
import { SetVariableArray } from "./common/Main";

export default function Engagement() {
  const [setButtonArray, buttonArray, choice, setChoice] =
    useContext(SetVariableArray);
  return (
    <>
      <h1>Engagement</h1>
      <h2>{choice[0]["food-name"]}</h2>
    </>
  );
}
