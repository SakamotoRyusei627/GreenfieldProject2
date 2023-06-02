import React, { useState } from "react";
import "./ShoppingList.css";

const ShoppingList = () => {
  const initialArray = [...Array(3)];
  const [shopping, setShopping] = useState(initialArray);
  return (
    <div className="content">
      <ul className="shoppingColum">
        <li>お買い上げ商品</li>
        <li>購入日</li>
        <li>消費期限</li>
        <li>数量</li>
      </ul>
      <ul className="topic">
        {shopping.map((e, ind) => (
          <li key={ind} className="formData">
            <input name="food-name" type="text" />
            <input name="registration-date" type="date" />
            <input name="expiration-date" type="date" />
            <input name="quantity" type="number" min={0} />
            <select name="quantity-unit">
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
          setShopping((prev) => [...prev, ""]);
          // ダミー
          const data = document.querySelectorAll(".formData");
          console.log(data[0]);
        }}
      >
        ➕
      </div>
    </div>
  );
};

export default ShoppingList;
