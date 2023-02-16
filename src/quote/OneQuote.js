import { useState } from "react";
import { Quote } from "./Quote";
import { quotes } from "./quotes";

const OneQuote = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const currentQuote = quotes[currIndex];

  return (
    <div className="App">
      {<Quote text={currentQuote.text} author={currentQuote.author} />}
    </div>
  );
};

export default OneQuote;
