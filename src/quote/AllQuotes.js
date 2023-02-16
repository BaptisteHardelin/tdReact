import { quotes } from "./quotes";
import { Quote } from "./Quote";

const AllQuotes = () => {
  return (
    <div>
      {" "}
      {quotes.map((quote) => (
        <Quote {...quote} key={quote.id} />
      ))}
    </div>
  );
};

export default AllQuotes;
