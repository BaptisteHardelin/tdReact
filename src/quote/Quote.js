const Quote = (props) => {
  return (
    <>
      <div className="text">Text: {props.text}</div>
      <div className="author">Author: {props.author}</div>
    </>
  );
};

export { Quote };
