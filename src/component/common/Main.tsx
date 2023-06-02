import React, { RefObject, useContext, useEffect, useRef, useState } from "react";
import Table from "../Table";
import ContentArea from "./ContentArea";
import ShoppingList from "../ShoppingList";
import McKinsey from "../McKinsey";
import PastMenuList from "../PastMenuList";
import { FlagContext } from "../App";

type props = [
  setButtonArray : React.Dispatch<React.SetStateAction<{text: string, flag: number, func: ()=> void}[]>>,
  buttonArray: {text: string, flag: number, func: ()=> void}[],
  choice : {"food-name":string,"registration-date":string,"expiration-date":string,"quantity":string,"quantity-unit":string}[],
  setChoice:React.Dispatch<React.SetStateAction<{"food-name":string,"registration-date":string,"expiration-date":string,"quantity":string,"quantity-unit":string}[]>>
]

export const SetVariableArray = React.createContext<props>([()=>{}, [], [], ()=>{}]);

const Main = () => {
  const [foodList, setFoodList] = useState([]);
  const [cookList, setCookList] = useState([]);
  const [choice, setChoice] = useState([{"food-name":"","registration-date":"","expiration-date":"","quantity":"","quantity-unit":""}]);
  const [buttonArray, setButtonArray] = useState([
    { text: "食材登録", flag: 2, func: ()=>{}},
    { text: "献立相談", flag: 3, func: ()=>{
      const datas = [...document.querySelectorAll(".handOverdata")].filter(e => e.getElementsByTagName("input")[0].checked)
      .map(e => ({
        "food-name":e.getElementsByClassName("food-name")[0].innerHTML,
        "registration-date":e.getElementsByClassName("registration-date")[0].innerHTML,
        "expiration-date":e.getElementsByClassName("expiration-date")[0].innerHTML,
        "quantity":e.getElementsByClassName("quantity")[0].innerHTML,
        "quantity-unit":e.getElementsByClassName("quantity-unit")[0].innerHTML,
      }));
      console.log(datas);

      setChoice(datas);
    }},

    { text: "先週の献立", flag: 4, func: ()=>{}}])
  const [flag, , , pageList] = useContext(FlagContext);

  useEffect(() => {
    const getData = async () =>{
      const foodList = await fetch("http://localhost:3333/food/sazaezamasu").then(e => e.json());
      setFoodList(foodList);
      const cookList = await fetch("http://localhost:3333/previousCook/sazaezamasu").then(e => e.json());
      setCookList(cookList);
    }
    getData();
  },[])

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

  return (
    <SetVariableArray.Provider value={[setButtonArray, buttonArray, choice, setChoice]}>
      <ContentArea text={pageList[pageList.length-1].text} foodList={foodList} setFoodList={setFoodList} buyFood={buyFood} >
        {flag === 1 && <Table foodList={foodList} />}
        {flag === 2 && <ShoppingList foodNameRef={foodNameRef} registrationDate={registrationDate} expirationDate={expirationDate} quantity={quantity} quantityUnit={quantityUnit} />}
        {flag === 3 && <McKinsey />}
        {flag === 4 && <PastMenuList cookList={cookList}/>}
      </ContentArea>
    </SetVariableArray.Provider>
  );
};

export default Main;
