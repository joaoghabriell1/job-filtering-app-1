import styles from "./CompanyCard.module.css";
import useImage from "../../hooks/useImage";

const CompanyCard = (props) => {
  const image = useImage(props.company.toLowerCase().replace(" ", ""));

  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <div
          style={{ background: props.logobg }}
          className={styles["header__logo"]}
        >
          <img src={image} alt="logo" />
        </div>
        <div className={styles["info-wrapper"]}>
          <div className={styles["info-container"]}>
            <h3>{props.company}</h3>
            <span className="color-lightgray">{`${props.company}.com`}</span>
          </div>
          <div>
            <button className={styles.btn}>
              <a target="_blank" href={props.site}>
                Visit Us
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CompanyCard;
