import React, { useState, useContext } from "react";
import "./ShoppingList.css";
import { SetVariableArray } from "./common/Main";

type props = {
  foodNameRef: any;
  registrationDate: any;
  expirationDate: any;
  quantity: any;
  quantityUnit: any;
};
const ShoppingList: React.FC<props> = ({
  foodNameRef,
  registrationDate,
  expirationDate,
  quantity,
  quantityUnit,
}) => {
  const initialArray = [...Array(3)];
  // console.log(initialArray);
  const [shopping, setShopping] = useState(initialArray);
  // const [shopping, setShopping] = useState([""])
  const [
    setButtonArray,
    buttonArray,
    choice,
    setChoice,
    message,
    setMessage,
    resistFood,
    setResistFood,
    formButtonRef
  ] = useContext(SetVariableArray);
  console.log({resistFood});

  return (
    <form className="content">
      <ul className="shoppingColum">
        <li>お買い上げ商品</li>
        <li>購入日</li>
        <li>消費期限</li>
        <li>数量</li>
      </ul>
      <ul className="topic">
        {shopping.map((e, ind) => (
          <li key={ind} className="formData">
            <input
              name="food-name"
              type="text"
              onChange={(e) => {
                const food = [...resistFood];
                food[ind]["food-name"] = e.target.value;
                setResistFood(food);
              }}
              required
            />
            <input
              name="registration-date"
              type="date"
              onChange={(e) => {
                const food = [...resistFood];
                food[ind]["registration-date"] = e.target.value;
                setResistFood(food);
              }}
              required
            />
            <input
              name="expiration-date"
              type="date"
              onChange={(e) => {
                const food = [...resistFood];
                food[ind]["expiration-date"] = e.target.value;
                setResistFood(food);
              }}
            />
            <input
              name="quantity"
              type="number"
              min={0}
              onChange={(e) => {
                const food = [...resistFood];
                food[ind]["quantity"] = e.target.value;
                setResistFood(food);
              }}
              required
            />
            <select
              name="quantity-unit"
              onChange={(e) => {
                const food = [...resistFood];
                food[ind]["quantity-unit"] = e.target.value;
                setResistFood(food);
              }}
            >
              <option value="個/本/玉">個/本/玉</option>
              <option value="パック/袋/缶">パック/袋/缶</option>
              <option value="L">L</option>
              <option value="Kg">Kg</option>
            </select>
          </li>
        ))}
      </ul>
      <div
        className="addRow"
        onClick={() => {
          setShopping([...shopping, ""]);
          setResistFood([...resistFood, { "quantity-unit": "個/本/玉" }]);
          // ダミー
          const data = document.querySelectorAll(".formData");
          console.log(data[0]);
        }}
      >
        ➕
      </div>
      {/* <input type="submit" ref={formButtonRef} onClick={() => {console.log("クリック")}}></input> */}
    </form>
  );
};

export default ShoppingList;

{
  /* <input name="food-name" type="text" ref={(el) => (foodNameRef.current[ind] = el)} />
              <input name="registration-date" type="date" ref={(el) => (registrationDate.current[ind] = el)} />
              <input name="expiration-date" type="date" ref={(el) => (expirationDate.current[ind] = el)} />
              <input name="quantity" type="number" min={0} ref={(el) => (quantity.current[ind] = el)} />
              <select name="quantity-unit" ref={(el) => (quantityUnit.current[ind] = el)} ></select> */
}
