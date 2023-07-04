import { useContext } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/desktop/logo.svg";
import MainContainer from "../UI/MainContainer";
import { Link } from "react-router-dom";
import Context from "../../store/filter-context";

const Header = () => {
  const context = useContext(Context);

  const clickHandler = () => {
    context.onFilter({
      "company-position": "",
      location: "",
      fullTime: false,
    });
  };

  return (
    <header className={classes["header"]}>
      <MainContainer>
        <div className={classes["header-container"]}>
          <div className={classes["header__logo"]}>
            <Link onClick={clickHandler} to="/">
              <img src={logo} alt="company-logo" />
            </Link>
          </div>
          <div className={classes["header__switch"]}></div>
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;
