import { Quote } from "./quote/AllQuote";
import { quotes } from "./quote/quotes";

const App = () => {
  return (
    <div className="App">
      <h1>Mes Citations!</h1>

      <div>
        {quotes.map((quote) => (
          <Quote {...quote} key={quote.id} />
        ))}
      </div>
      <Quote text="Elementary, my dear Watson" author="Sherlock Holmes" />
    </div>
  );
};

export default App;
