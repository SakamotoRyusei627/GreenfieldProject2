import React from "react";
import Button from "./Button";

type props = {
  text: string;
  children?: any;
};

const ContentArea: React.FC<props> = ({ text, children }) => {
  return (
    <>
      <div className="headlineArea">
        <div className="headline">
          <h3 className="headBox">{`きくち家の${text}`}</h3>
        </div>
        <Button />
      </div>
      <article>{children}</article>
    </>
  );
};

export default ContentArea;
