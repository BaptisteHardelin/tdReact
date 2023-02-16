import styles from "./Quote.module.css";

const Quote = (props) => {
  return (
    <>
      <div className={styles.text}>Text: {props.text}</div>
      <div className={styles.author}>Author: {props.author}</div> <br />
    </>
  );
};

export { Quote };
