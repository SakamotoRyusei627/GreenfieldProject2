import React from "react";
import "./Common.css";

export default function Breadcrumbs({
  pageList,
  setFlag,
}: {
  pageList: { text: string; num: number }[];
  setFlag: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <span className="breadcrumbs">
      {pageList.map((e, ind) =>
        ind !== pageList.length - 1 ? (
          <React.Fragment key={e.text}>
            <span className="link" onClick={() => {}}>
              {e.text}
            </span>
            <span> ＞ </span>
          </React.Fragment>
        ) : (
          <React.Fragment key={e.text}>{e.text}</React.Fragment>
        )
      )}
    </span>
  );
}
