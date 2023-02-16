import { quotes } from "./quotes";
import { Quote } from "./Quote";
import { useState } from "react";

const AllQuotes = () => {
  const [temp, setTemp] = useState(quotes);
  const handleOnChange = (e) => {
    const findAuhtor = e.target.value.toLowerCase();
    console.log(findAuhtor);
    setTemp(
      temp.filter((quote) => {
        return quote.author.toLowerCase().includes(findAuhtor);
      })
    );

    console.log(temp);
  };

  const allQuotes = () => {
    return temp.map((quote) => (
      <li key={quote.id}>
        <Quote {...quote} />
      </li>
    ));
  };

  return (
    <div>
      <input
        type="search"
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      <ol>{allQuotes()}</ol>
    </div>
  );
};

export default AllQuotes;
