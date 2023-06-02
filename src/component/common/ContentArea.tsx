import React from "react";
import Button from "./Button";

type props = {
  text: string;
  children?: any;
  foodList: any;
  setFoodList: any;
  buyFood: any;
};

const ContentArea: React.FC<props> = ({ text, children, foodList, setFoodList, buyFood }) => {
  return (
    <>
      <div className="headlineArea">
        <div className="headline">
          <h3 className="headBox">{`きくち家の${text}`}</h3>
        </div>
        <Button foodList={foodList} setFoodList={setFoodList} buyFood={buyFood} />
      </div>
      <article>{children}</article>
    </>
  );
};

export default ContentArea;
