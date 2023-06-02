/* eslint-disable */
import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Breadcrumbs from "./common/Breadcrumbs";
import Day from "./common/Day";
import Main from "./common/Main";

type props = [
  flag: number,
  setFlag: React.Dispatch<React.SetStateAction<number>>,
  setPageList: React.Dispatch<
    React.SetStateAction<{ text: string; num: number }[]>
  >,
  pageList: { text: string; num: number }[]
];
export const FlagContext = React.createContext<props>([
  1,
  () => {},
  () => {},
  [],
]);

function App() {
  const [pageList, setPageList] = useState([{ text: "冷蔵庫", num: 1 }]);
  const [flag, setFlag] = useState(1);

  return (
    <>
      <Header />
      <Breadcrumbs pageList={pageList} setFlag={setFlag} />
      <Day />

      <main>
        <FlagContext.Provider value={[flag, setFlag, setPageList, pageList]}>
          <Main />
        </FlagContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
