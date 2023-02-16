import { useState } from "react";
import { Quote } from "./Quote";
import { quotes, deleteQuote } from "./quotes";

const OneQuote = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [quotesArr, setQuotesArr] = useState(quotes);
  const [canDelete, setCanDelete] = useState(true);
  const currentQuote = quotesArr[currIndex];

  const handleNext = () => {
    setCurrIndex((currIndex + 1) % quotesArr.length);
  };

  const handlePrev = () => {
    setCurrIndex((currIndex + quotesArr.length - 1) % quotesArr.length);
  };

  const handleDelte = (id) => {
    deleteQuote(id, quotesArr, setQuotesArr, setCanDelete);
  };

  return (
    <div className="App">
      {<Quote text={currentQuote.text} author={currentQuote.author} />}

      <button onClick={() => handleNext()}>Suivant</button>
      <button onClick={() => handlePrev()}>Précédent</button>
      {canDelete && (
        <button onClick={() => handleDelte(currentQuote.id)}>Supprimer</button>
      )}
    </div>
  );
};

export default OneQuote;
