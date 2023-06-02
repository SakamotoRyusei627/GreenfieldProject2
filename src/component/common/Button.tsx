import React, { useContext } from "react";
import { FlagContext } from "../App";
import { SetVariableArray } from "./Main";

type props = {
  foodList: any;
  setFoodList: any;
  buyFood: any;
};

const Button: React.FC<props> = ({ foodList, setFoodList, buyFood }) => {
  const [, setFlag, setPageList] = useContext(FlagContext);
  const [
    setButtonArray,
    buttonArray,
    choice,
    setChoice,
    message,
    setMessage,
    resistFood,
    setResistFood,
  ] = useContext(SetVariableArray);

  return (
    <div className="buttonArea">
      {buttonArray.map((e: any, index: any) => (
        <button
          key={index}
          className="button"
          onClick={() => {
            setFlag(e.flag);
            switch (e.flag) {
              case 1:
                setPageList([{ text: "冷蔵庫", num: 1 }]);
                setButtonArray([
                  {
                    text: "食材登録",
                    flag: 2,
                    func: () => {},
                  },
                  {
                    text: "献立相談",
                    flag: 3,
                    func: () => {
                      const datas = [
                        ...document.querySelectorAll(".handOverdata"),
                      ];
                      console.log("####datas#####");

                      console.log(datas);

                      const filterDatas = datas
                        .filter(
                          (e) => e.getElementsByTagName("input")[0].checked
                        )
                        .map((e) => ({
                          "food-name":
                            e.getElementsByClassName("food-name")[0].innerHTML,
                          "registration-date":
                            e.getElementsByClassName("registration-date")[0]
                              .innerHTML,
                          "expiration-date":
                            e.getElementsByClassName("expiration-date")[0]
                              .innerHTML,
                          quantity:
                            e.getElementsByClassName("quantity")[0].innerHTML,
                          "quantity-unit":
                            e.getElementsByClassName("quantity-unit")[0]
                              .innerHTML,
                        }));
                      console.log("ssssssssssssssssssss");
                      console.log({ filterDatas });

                      setChoice(filterDatas);
                    },
                  },
                  { text: "先週の献立", flag: 4, func: () => {} },
                ]);
                break;
              case 2:
                setPageList([
                  { text: "冷蔵庫", num: 1 },
                  { text: "買い物袋", num: 2 },
                ]);
                setButtonArray([
                  {
                    text: "登録",
                    flag: 1,
                    func: async () => {
                      console.log("このデータを送る", resistFood);
                      const fetchData = await fetch(
                        `http://localhost:3333/food/sazaezamasu`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(resistFood),
                        }
                      ).then((res) => res.json());
                      setFoodList(fetchData);
                    },
                  },
                  { text: "戻る", flag: 1, func: () => {} },
                ]);
                break;
              case 3:
                setPageList([
                  { text: "冷蔵庫", num: 1 },
                  { text: "料理長", num: 3 },
                ]);
                setButtonArray([
                  {
                    text: "相談",
                    flag: 5,
                    func: async () => {
                      console.log("ここでGPTに問い合わせる");
                      console.log("ここで材料リストを保存しておく？");
                      console.log({ choice });

                      const onegai = {
                        countOfPeople: 1,
                        arrFoods: choice,
                      };
                      const fetchData = await fetch(
                        `http://localhost:3333/propose`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(onegai),
                        }
                      ).then((res) => {
                        console.log(res.json());
                        return res.json();
                      });
                      console.log({ fetchData });
                      setMessage(fetchData);
                    },
                  },
                  { text: "戻る", flag: 1, func: () => {} },
                ]);
                break;
              case 4:
                setPageList([
                  { text: "冷蔵庫", num: 1 },
                  { text: "食卓", num: 4 },
                ]);
                setButtonArray([{ text: "戻る", flag: 1, func: () => {} }]);
                break;
              case 5:
                setPageList([
                  { text: "冷蔵庫", num: 1 },
                  { text: "料理長", num: 3 },
                  { text: "献立（案）", num: 5 },
                ]);
                setButtonArray([
                  { text: "次へ", flag: 6, func: () => {} },
                  { text: "戻る", flag: 3, func: () => {} },
                ]);
                break;
              case 6:
                setPageList([
                  { text: "冷蔵庫", num: 1 },
                  { text: "料理長", num: 3 },
                  { text: "献立（案）", num: 5 },
                  { text: "献立", num: 6 },
                ]);
                setButtonArray([
                  { text: "次へ", flag: 1, func: () => {} },
                  { text: "戻る", flag: 5, func: () => {} },
                ]);
                break;
            }
            e.func();
          }}
        >
          {e["text"]}
        </button>
      ))}
    </div>
  );
};

export default Button;
