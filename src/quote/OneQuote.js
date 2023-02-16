import { useState } from "react";
import { Quote } from "./Quote";
import { quotes } from "./quotes";

const OneQuote = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const currentQuote = quotes[currIndex];

  const handleNext = () => {
    // On passe à la citation suivante
    setCurrIndex(currIndex + 1);

    // Si currIndex est équivalant au nombre de citation alors on revien au début du tableau
    if (currIndex === quotes.length - 1) {
      setCurrIndex(0);
    }
  };

  const handlePrev = () => {
    if (currIndex === 0) {
      setCurrIndex(quotes.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  return (
    <div className="App">
      {<Quote text={currentQuote.text} author={currentQuote.author} />}

      <button onClick={() => handleNext()}>Suivant</button>
      <button onClick={() => handlePrev()}>Précédent</button>
    </div>
  );
};

export default OneQuote;
