import classes from "./JobList.module.css";

const LoadMoreBtn = (props) => {
  return (
    <div className={classes["seeMore-btn-container"]}>
      <button onClick={props.onLoadMore} className={classes["seeMore-btn"]}>
        See more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
