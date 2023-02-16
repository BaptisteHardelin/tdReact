import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MyNavBar from "./navbar/MyNavBar";
import AllQuotes from "./quote/AllQuotes";
import OneQuote from "./quote/OneQuote";
import AddQuote from "./quote/AddQuote";

const App = () => {
  return (
    <>
      <MyNavBar />
      <Routes>
        <Route exat path="/allQuotes" element={<AllQuotes />} />
        <Route exat path="/oneQuote" element={<OneQuote />} />
        <Route exat path="/addQuote" element={<AddQuote />} />
      </Routes>
    </>
  );
};

export default App;
