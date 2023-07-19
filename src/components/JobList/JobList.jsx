import { useContext, useEffect, useState } from "react";
import classes from "./JobList.module.css";
import JobCard from "./JobCard";
import MainContainer from "../UI/MainContainer";
import Context from "../../store/filter-context";
import LoadMoreBtn from "./LoadMoreBtn";

const JobList = () => {
  const [visible, setVisible] = useState(3);
  const ctx = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://job-filter-api-default-rtdb.firebaseio.com/jobs.json"
      );
      const data = await response.json();
      const arrayData = Object.values(data);
      ctx.onSetFullList(arrayData);
    };
    fetchData();
  }, []);

  const loadMoreHandler = () => {
    setVisible((prev) => {
      return prev + 3;
    });
  };

  let jobList;
  let error;

  if (!ctx.hasData) {
    error = (
      <div className={classes["error-message"]}>
        <p>No jobs were found!</p>
      </div>
    );
  }

  if (ctx.filteredJobList.length == 0 && ctx.hasData) {
    jobList = (
      <>
        {ctx.fullJobList.map(
          ({
            id,
            company,
            contract,
            location,
            logo,
            position,
            postedAt,
            logoBackground,
          }) => {
            return (
              <JobCard
                logoBg={logoBackground}
                key={id}
                id={id}
                company={company}
                location={location}
                logo={logo}
                position={position}
                postedAt={postedAt}
                contract={contract}
              />
            );
          }
        )}
      </>
    );
  }

  if (ctx.filteredJobList.length > 0) {
    jobList = (
      <>
        {ctx.filteredJobList.map(
          ({
            id,
            company,
            contract,
            location,
            logo,
            position,
            postedAt,
            logoBackground,
          }) => {
            return (
              <JobCard
                logoBg={logoBackground}
                key={id}
                id={id}
                company={company}
                location={location}
                logo={logo}
                position={position}
                postedAt={postedAt}
                contract={contract}
              />
            );
          }
        )}
      </>
    );
  }
  return (
    <MainContainer>
      <ul className={classes["job-list"]}>
        {ctx.hasData ? jobList.props.children.slice(0, visible) : error}
      </ul>
      {ctx.hasData && jobList.props.children.length > visible ? (
        <LoadMoreBtn onLoadMore={loadMoreHandler} />
      ) : null}
    </MainContainer>
  );
};

export default JobList;
