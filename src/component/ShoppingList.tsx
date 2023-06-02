import React, { useState } from "react";
import "./ShoppingList.css";

type props = {
  foodNameRef: any;
  registrationDate: any;
  expirationDate: any;
  quantity: any;
  quantityUnit: any;
}
const ShoppingList: React.FC<props> = ({ foodNameRef, registrationDate, expirationDate, quantity, quantityUnit }) => {
  const initialArray = [...Array(3)];
  console.log(initialArray);
  const [shopping, setShopping] = useState(initialArray)
  // const [shopping, setShopping] = useState([""])

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
              <input name="food-name" type="text" ref={(el) => (foodNameRef.current[ind] = el)} />
              <input name="registration-date" type="date" ref={(el) => (registrationDate.current[ind] = el)} />
              <input name="expiration-date" type="date" ref={(el) => (expirationDate.current[ind] = el)} />
              <input name="quantity" type="number" min={0} ref={(el) => (quantity.current[ind] = el)} />
              <select name="quantity-unit" ref={(el) => (quantityUnit.current[ind] = el)} >
                <option value="個/本/玉">個/本/玉</option>
                <option value="パック/袋/缶">パック/袋/缶</option>
                <option value="L">L</option>
                <option value="Kg">Kg</option>
              </select>
            </li>
        ))}
      </ul>
      <div className="addRow" onClick={()=>{
        setShopping([...shopping, ""]);
        // ダミー
        const data = document.querySelectorAll(".formData");
        console.log(data[0]);
        }}>➕</div>
    </form>
  );
};

export default ShoppingList;
