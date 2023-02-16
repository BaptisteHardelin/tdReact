import AllQuotes from "./quote/AllQuotes";
import OneQuote from "./quote/OneQuote";
import { useState } from "react";

const App = () => {
  const [showAll, setShowAll] = useState(false);
  const [showUnique, setUnique] = useState(false);

  const handleAll = () => {
    setShowAll(!showAll);
  };

  const handleUnique = () => {
    setUnique(!showUnique);
  };

  return (
    <div className="App">
      <h1>Mes Citations!</h1>

      {showAll && (
        <div>
          <span>AllQuotes</span>
          <AllQuotes />
        </div>
      )}
      {showUnique && (
        <div>
          <span>OneQuote</span>
          <OneQuote />
        </div>
      )}

      <button onClick={() => handleAll()}>Tout</button>
      <button onClick={() => handleUnique()}>Unique</button>
    </div>
  );
};

export default App;
