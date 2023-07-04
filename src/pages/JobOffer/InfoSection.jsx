import styles from "./InfoSection.module.css";

const InfoSection = (props) => {
  return (
    <section className={styles["info-section"]}>
      <header>
        <div className={styles["header-wrapper"]}>
          <div className={styles["info-container"]}>
            <div className={styles.flex}>
              <span className={styles["color-lightgray"]}>{props.posted}</span>
              <span className={styles["color-lightgray"]}>
                {props.contract}
              </span>
            </div>
            <div>
              <h2>{props.jobPosition}</h2>
            </div>
            <div className={styles["color-blue"]}>
              <span>{props.location}</span>
            </div>
          </div>
          <div>
            <button className={styles["apply-btn"]}>Apply Now</button>
          </div>
        </div>
      </header>
      <div className={styles.description}>
        <p className={styles.content}>{props.description}</p>
      </div>
      <div>
        <h3 className={styles.heading}>Requirements</h3>
        <div>
          <p className={styles.content}>{props.reqContent}</p>
        </div>
        <ul className={styles["info-ul"]}>
          {props.reqItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3 className={styles.heading}>What you Will Do</h3>
        <div>
          <p className={styles.content}>{props.roleContent}</p>
        </div>
        <ol className={styles["role-ol"]}>
          {props.roleItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    </section>
  );
};

export default InfoSection;
