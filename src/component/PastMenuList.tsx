import "./PastMenuList.css";

type props = {
    cookList: {
      "cooking-date": string;
      "dishes": string[];
    }[];
};

export default function PastMenuList({cookList}:props) {

  return (
    <div className="sect">
      {cookList.map((e, ind) => (
        <ul key={ind}>
          <li>
            <div className="petti">{e["cooking-date"]}</div>
            {e["dishes"].map((E, IND) => (<li key={IND}>{"・"+E}</li>))}
          </li>
        </ul>
      ))}
    </div>
  );
}
