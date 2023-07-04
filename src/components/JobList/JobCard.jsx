import { Link } from "react-router-dom";
import classes from "./JobCard.module.css";
import images from "../../assets/logos/imagesIndex";

const JobCard = (props) => {
  const logoUrl = `${images[props.company.toLowerCase()]}`;
  return (
    <li>
      <Link to={`${props.id}`}>
        <div className={classes["job-card"]}>
          <div
            style={{ background: `${props.logoBg}` }}
            className={classes["job-card__logo-container"]}
          >
            <img src={logoUrl} alt="logo" />
          </div>
          <div className={classes["flex-container"]}>
            <span>{props.postedAt}</span>
            <span>&#x2022;</span>
            <span>{props.contract}</span>
          </div>
          <div>
            <h3>{props.position}</h3>
          </div>
          <div>
            <span>{props.company}</span>
          </div>
          <div>
            <span className={classes["span--secondary"]}>{props.location}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default JobCard;
