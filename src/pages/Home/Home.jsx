import classes from "./Home.module.css";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobList from "../../components/JobList/JobList";

const Home = () => {
  return (
    <>
      <SearchBar />
      <JobList />
    </>
  );
};

export default Home;
