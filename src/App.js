import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MyNavBar from "./navbar/MyNavBar";
import AllQuotes from "./quote/AllQuotes";
import OneQuote from "./quote/OneQuote";

const App = () => {
  return (
    <>
      <MyNavBar />
      <Routes>
        <Route exat path="/allQuotes" element={<AllQuotes />} />
        <Route exat path="/oneQuote" element={<OneQuote />} />
      </Routes>
    </>
  );
};

export default App;
