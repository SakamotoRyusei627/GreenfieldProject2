import { useContext } from "react";
import "./McKinsey.css"
import { SetVariableArray } from "./common/Main";

export default function McKinsey() {
  const [, , choice] = useContext(SetVariableArray);
  console.log(choice);
  

  return (
    <div className="content">
      <div className="choiceFood">選ばれたのは。。。</div>
      <section>
        <ul>
          {choice.map((e, ind) => {
            return <li>{e["food-name"]+"・・・"+e["quantity"]+e["quantity-unit"]}</li>
          })}
          <li></li> {/* スペーサー※消さない*/}
        </ul>
      </section>
      <div className="choiceFood">料理長にお願い<span>♥</span></div>
      <section>
        <div>
          <div className="iconArea">
            <img className="iconPic" src="./system/gohan.png" alt="gohan" />
          </div>
          <input type="number" defaultValue={1} min={1} />
          <span>人前</span>
        </div>
        <div>
          <div className="iconArea"></div>
          <span>Coming Soon！</span>
        </div>
        <div>
          <div className="iconArea"></div>
          <span>Coming Soon！</span>
        </div>
      </section>
    </div>
  );
}
