import classes from "./FilterCard.module.css";
import locationIcon from "../../../assets/desktop/icon-location.svg";
import BackLayer from "../../UI/BackLayer";

const FilterCard = (props) => {
  const {showCard}= props;
  const locations = props.jobs.map((element, index, array) => {
    const newArray = array.slice(0, index).map((element) => {
      return element.location;
    });
    if (newArray.includes(element.location)) {
      return;
    }
    return <option key={index}>{element.location}</option>;
  });
  return (
    <>
      <BackLayer showCard={showCard} onClick={props.onClick} />
      <div className={`${ showCard ? classes["filter-card"]:classes["displaynone"]} ${classes["filter-card"]}`}>
        <div className={classes["input-container"]}>
          <label htmlFor="location" aria-label="location">
            <img src={locationIcon} alt="" />
          </label>
          <select
            className={classes["input"]}
            onChange={props.onChange}
            name="location"
            id="locationn"
            value={props.filters.location}
          >
            <option value="">Select a location</option>
            {locations}
          </select>
        </div>
        <div className={classes["input-container"]}>
          <input
            id="full-time"
            type="checkbox"
            name="full-time"
            onChange={props.onChange}
            checked={props.filters["fullTime"]}
          />
          <label className={classes["checkbox-label"]} htmlFor="full-time">
            Full Time
          </label>
        </div>
        <div>
          <button onClick={props.onSearch} className={classes["btn"]}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
