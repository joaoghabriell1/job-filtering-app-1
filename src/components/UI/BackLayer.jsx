import classes from "./BackLayer.module.css";
import ReactDOM from "react-dom";

const BackLayer = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div onClick={props.onClick} className={classes.backLayer}></div>,
        document.getElementById("backlayer-root")
      )}
    </>
  );
};

export default BackLayer;
