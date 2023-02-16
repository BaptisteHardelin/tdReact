import { Quote } from "./quote/Quote";

const App = () => {
  return (
    <div className="App">
      <h1>Mes Citations!</h1>
      <Quote text="Elementary, my dear Watson" author="Sherlock Holmes" />
    </div>
  );
};

export default App;
