import "./Table.css";

type props = {
  foodList: {
    "food-name": string;
    "quantity": string;
    "quantity-unit": string;
    "expiration-date": string//Date;
    "registration-date": string//Date;
  }[];
};

export default function Table ({foodList}:props){
  const data = document.querySelectorAll("input[type='checkbox']")as NodeListOf<HTMLInputElement>;
  data.forEach(e=>{if(e.checked){console.log(e.id)}});
  
  return (
    <table>
      <thead><tr>
          <th colSpan={2}>な・か・み<span>♥</span></th>
          <th>購入日</th>
          <th>消費期限</th>
          <th colSpan={2}>残り</th>      
      </tr></thead>
      <tbody>
      {foodList.map((foodData, ind) => (
        <tr className="handOverdata" key={ind}>
          <td>
            <input type="checkbox" id={String(ind)} />
          </td>
          <td className="food-name">{foodData["food-name"]}</td>
          <td className="registration-date">{foodData["registration-date"]}</td>
          <td className="expiration-date">{foodData["expiration-date"]}</td>
          <td className="quantity">{Number(foodData["quantity"])}</td>
          <td className="quantity-unit">{foodData["quantity-unit"]}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};
//  Table;
