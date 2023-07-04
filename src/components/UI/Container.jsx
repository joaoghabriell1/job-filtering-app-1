import styles from "./Container.module.css";

const Container = (props) => {
  return <div className={styles["main-container"]}>{props.children}</div>;
};

export default Container;
