import React, { useState, useContext, useEffect } from "react";
import Propose from "./Propose";
import Engagement from "./Engagement";
import { FlagContext } from "./App";
import { SetVariableArray } from "./common/Main";

export default function Deloitte() {
  const [flag] = useContext(FlagContext);
  console.log("AAAAAAAAAAAAA");

  return (
    <>
      {flag === 5 && <Propose />}
      {flag === 6 && <Engagement />}
    </>
  );
}
