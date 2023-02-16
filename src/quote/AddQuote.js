import { useState } from "react";
import { addQuote } from "./quotes";

const AddQuote = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Author: ${author}, Text: ${text}`);
    if (text && author) addQuote(text, author);
  };

  const handleReset = () => {
    setAuthor("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <br />
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Soumettre</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default AddQuote;
