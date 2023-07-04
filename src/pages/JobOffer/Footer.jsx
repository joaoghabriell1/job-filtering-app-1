import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <div className={styles["footer-container"]}>
        <div className={styles["info-container"]}>
          <h3>{props.position}</h3>
          <span>{props.company}</span>
        </div>
        <div>
          <button className={styles["apply-btn"]}>Apply Now</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
