import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.three_body}>
      <div className={styles.three_body__dot}></div>
      <div className={styles.three_body__dot}></div>
      <div className={styles.three_body__dot}></div>
    </div>
  );
};

export default Loader;
