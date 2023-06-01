import React from "react";
import "./Common.css";

export default function Breadcrumbs({pageList, setFlag}: {pageList:{text:string, num:number}[], setFlag:React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <span className="breadcrumbs">
      {pageList.map((e, ind)=> 
      ind !== pageList.length-1 
      ? <React.Fragment key={e.text}><span className="link" onClick={()=>{
        // setFlag(e.num)
        // switch(e.num){
        //   case 1:
        //     setTitleText("冷蔵庫");
        //     setPageList([{text:"冷蔵庫", num:1}]);
        //     setButtonArray([{ text: "食材登録", flag: 2 },{ text: "献立相談", flag: 3 },{ text: "先週の献立", flag: 4 }]);
        //     break;
        //   case 2:
        //     setTitleText("買い物袋");
        //     setPageList([{text: "冷蔵庫", num:1},{text: "買い物袋",num: 2}]);
        //     setButtonArray([{text: "登録", flag: 1},{text: "戻る", flag: 1}]);
        //     break;
        //   case 3:
        //     setTitleText("料理長");
        //     setPageList([{text: "冷蔵庫", num:1},{text: "料理長",num: 3}]);
        //     setButtonArray([{text: "相談", flag: 5},{text: "戻る", flag: 1}]);
        //     break;
        //   case 4:
        //     setTitleText("食卓");
        //     setPageList([{text: "冷蔵庫", num:1},{text: "食卓",num: 4}]);
        //     setButtonArray([{text: "戻る", flag: 1}]);
        //     break;
        //   case 5:
        //     setTitleText("献立（案）");
        //     setPageList([{text: "冷蔵庫", num:1},{text: "料理長",num: 3},{text: "献立（案）",num: 5}]);
        //     setButtonArray([{text: "次へ", flag: 6},{text: "戻る", flag: 3}]);
        //     break;
        //   case 6:
        //     setTitleText("献立");
        //     setPageList([{text: "冷蔵庫", num:1},{text: "料理長",num: 3},{text: "献立（案）",num: 5},{text: "献立",num: 6}]);
        //     setButtonArray([{text: "次へ", flag: 1},{text: "戻る", flag: 5}]);
        //     break;
        // }
      }}>{e.text}</span><span> ＞ </span></React.Fragment>
      : <React.Fragment key={e.text}>{e.text}</React.Fragment>
      )}
    </span>
  );
}

