import AllQuotes from "./quote/AllQuotes";
import OneQuote from "./quote/OneQuote";

const App = () => {
  return (
    <div className="App">
      <h1>Mes Citations!</h1>

      <div>
        <span>AllQuotes</span>
        <AllQuotes />
      </div>
      <div>
        <span>OneQuote</span>
        <OneQuote />
      </div>
    </div>
  );
};

export default App;
