import React, { useState, useContext } from "react";
import Propose from "./Propose";
import Engagement from "./Engagement";
import { FlagContext } from "./App";

export default function Deloitte() {
  const [flag] = useContext(FlagContext);

  return (
    <>
      {flag === 5 && <Propose />}
      {flag === 6 && <Engagement />}
    </>
  );
}
