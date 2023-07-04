import { useContext, useState } from "react";
import classes from "./SearchBar.module.css";

import filterIcon from "../../assets/mobile/icon-filter.svg";
import searchIcon from "../../assets/desktop/icon-search.svg";
import FilterCard from "./FilterCard/FilterCard";
import MainContainer from "../UI/MainContainer";
import Context from "../../store/filter-context";

const SearchBar = () => {
  const context = useContext(Context);
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileFilterCard, setMobileFilterCard] = useState(false);
  const [filters, setFilters] = useState({
    "company-position": "",
    location: "",
    fullTime: false,
  });

  mobileFilterCard
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  window.addEventListener("resize", function (event) {
    setWidth(window.innerWidth);
  });

  const filterCardHandler = () => {
    setMobileFilterCard((prev) => {
      return !prev;
    });
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    if (name == "full-time") {
      setFilters((prev) => {
        return {
          ...prev,
          fullTime: e.target.checked,
        };
      });
      return;
    }

    setFilters((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSearchHandler = () => {
    context.onFilter(filters);
    setFilters((prev) => {
      return {
        ...prev,
        "company-position": "",
        location: "",
        fullTime: false,
      };
    });
    setMobileFilterCard(false);
  };

  return (
    <MainContainer>
      <div className={classes["searchbar"]}>
        <div className={classes["flex-container"]}>
          <div className={classes["searchbar__input-container"]}>
            <label htmlFor="company-position">
              <input
                value={filters["company-position"]}
                onChange={onChangeHandler}
                className={classes["searchbar__input"]}
                id="company-position"
                name="company-position"
                type="text"
                placeholder="Filter by company..."
              />
            </label>
            <div className={classes["vl"]}></div>
          </div>
          <div className={classes["mobile-actions"]}>
            <button
              onClick={filterCardHandler}
              className={`${classes["mobile-actions__btn"]} ${classes["filter-icon"]}`}
            >
              <img src={filterIcon} alt="filter-icon" />
            </button>
            <button
              onClick={onSearchHandler}
              className={`${classes["mobile-actions__btn"]} ${classes["mobile-actions__btn--search"]} `}
            >
              <img src={searchIcon} alt="search-icon" />
            </button>
          </div>
        </div>
        {width <= 700 && mobileFilterCard ? (
          <FilterCard
            jobs={context.fullJobList}
            filters={filters}
            onSearch={onSearchHandler}
            onChange={onChangeHandler}
            onClick={filterCardHandler}
          />
        ) : null}
        {width >= 700 && (
          <FilterCard
            jobs={context.fullJobList}
            onSearch={onSearchHandler}
            filters={filters}
            onChange={onChangeHandler}
          />
        )}
      </div>
    </MainContainer>
  );
};

export default SearchBar;
