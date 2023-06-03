import React, {
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Table from "../Table";
import ContentArea from "./ContentArea";
import ShoppingList from "../ShoppingList";
import McKinsey from "../McKinsey";
import PastMenuList from "../PastMenuList";
import { FlagContext } from "../App";
import Deloitte from "../Deloitte";

type props = [
  setButtonArray: React.Dispatch<
    React.SetStateAction<{ text: string; flag: number; func: () => void }[]>
  >,
  buttonArray: { text: string; flag: number; func: () => void }[],
  choice: {
    "food-name": string;
    "registration-date": string;
    "expiration-date": string | null;
    quantity: string;
    "quantity-unit": string;
  }[],
  setChoice: React.Dispatch<
    React.SetStateAction<
      {
        "food-name": string;
        "registration-date": string;
        "expiration-date": string;
        quantity: string;
        "quantity-unit": string;
      }[]
    >
  >,
  message: { title: string; list: string[] }[],
  setMessage: any,
  resistFood: any,
  setResistFood: any,
  // 追加
  selectMessage: any,
  setSelectMessage: any,
  formButtonRef: any
];

export const SetVariableArray = React.createContext<props>([
  () => {},
  [],
  [],
  () => {},
  [],
  () => {},
  [],
  () => {},
  {},
  () => {},
  null,
]);

const Main = () => {
  // ↓追加
  const [selectMessage, setSelectMessage] = useState({});

  const [foodList, setFoodList] = useState([]);
  const [cookList, setCookList] = useState([]);
  const [choice, setChoice] = useState([
    {
      "food-name": "初期",
      "registration-date": "",
      "expiration-date": "",
      quantity: "",
      "quantity-unit": "",
    },
  ]);
  const [message, setMessage] = useState([]);
  const [resistFood, setResistFood] = useState([
    { "quantity-unit": "個/本/玉" },
    { "quantity-unit": "個/本/玉" },
    { "quantity-unit": "個/本/玉" },
  ]);

  const [buttonArray, setButtonArray] = useState([
    { text: "食材登録", flag: 2, func: () => {} },
    {
      text: "献立相談",
      flag: 3,
      func: () => {
        // const datas = [...document.querySelectorAll(".handOverdata")]
        //   .filter((e) => e.getElementsByTagName("input")[0].checked)
        //   .map((e) => ({
        //     "food-name": e.getElementsByClassName("food-name")[0].innerHTML,
        //     "registration-date":
        //       e.getElementsByClassName("registration-date")[0].innerHTML,
        //     "expiration-date":
        //       e.getElementsByClassName("expiration-date")[0].innerHTML,
        //     quantity: e.getElementsByClassName("quantity")[0].innerHTML,
        //     "quantity-unit":
        //       e.getElementsByClassName("quantity-unit")[0].innerHTML,

        // ################
        const datas = [...document.querySelectorAll(".handOverdata")];
        console.log("####Main_datas#####");

        console.log(datas);

        const filterDatas = datas
          .filter((e) => e.getElementsByTagName("input")[0].checked)
          .map((e) => ({
            "food-name": e.getElementsByClassName("food-name")[0].innerHTML,
            "registration-date":
              e.getElementsByClassName("registration-date")[0].innerHTML,
            "expiration-date":
              e.getElementsByClassName("expiration-date")[0].innerHTML,
            quantity: e.getElementsByClassName("quantity")[0].innerHTML,
            "quantity-unit":
              e.getElementsByClassName("quantity-unit")[0].innerHTML,
          }));

        console.log(
          "%c########Main_func",
          "color:#0000FF",
          filterDatas[0]["food-name"]
        );
        console.log({ filterDatas });

        // setChoice(datas);
        setChoice(filterDatas);
        console.log(filterDatas);

        return filterDatas;
      },
    },

    { text: "先週の献立", flag: 4, func: () => {} },
  ]);

  // 監視用
  useEffect(() => {
    console.log("choiceが変わったよ");
    console.log(choice);
  }, [choice]);

  useEffect(() => {
    console.log("selectMessageが変わったよ");
  }, [selectMessage]);

  // ＃＃＃＃＃＃＃＃＃＃＃＃

  const [flag, , , pageList] = useContext(FlagContext);

  useEffect(() => {
    const getData = async () => {
      const foodList = await fetch(
        "http://localhost:3333/food/sazaezamasu"
      ).then((e) => e.json());
      setFoodList(foodList);
      const cookList = await fetch(
        "http://localhost:3333/previousCook/sazaezamasu"
      ).then((e) => e.json());
      setCookList(cookList);
    };
    getData();
  }, [flag]);

  const foodNameRef = useRef<HTMLInputElement[]>([]);
  const registrationDate = useRef<HTMLInputElement[]>([]);
  const expirationDate = useRef<HTMLInputElement[]>([]);
  const quantity = useRef<HTMLInputElement[]>([]);
  const quantityUnit = useRef<HTMLInputElement[]>([]);

  const buyFood = {
    foodNameRef: foodNameRef.current?.map((ref) => ref?.value),
    registrationDate: registrationDate.current?.map((ref) => ref?.value),
    expirationDate: expirationDate.current?.map((ref) => ref?.value),
    quantity: quantity.current?.map((ref) => ref?.value),
    quantityUnit: quantityUnit.current?.map((ref) => ref?.value),
  };

  const formButtonRef = useRef(null);

  return (
    <SetVariableArray.Provider
      value={[
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
        formButtonRef,
      ]}
    >
      <ContentArea
        text={pageList[pageList.length - 1].text}
        foodList={foodList}
        setFoodList={setFoodList}
        buyFood={buyFood}
      >
        {flag === 1 && <Table foodList={foodList} />}
        {flag === 2 && (
          <ShoppingList
            foodNameRef={foodNameRef}
            registrationDate={registrationDate}
            expirationDate={expirationDate}
            quantity={quantity}
            quantityUnit={quantityUnit}
          />
        )}
        {flag === 3 && <McKinsey />}
        {flag === 4 && <PastMenuList cookList={cookList} />}
        {flag === 5 && <Deloitte />}
        {flag === 6 && <Deloitte />}
      </ContentArea>
    </SetVariableArray.Provider>
  );
};

export default Main;
