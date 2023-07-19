import classes from "./BackLayer.module.css";
import ReactDOM from "react-dom";

const BackLayer = (props) => {
  const {showCard} = props
  return (
    <>
      {ReactDOM.createPortal(
        <div onClick={props.onClick} className={`${classes.backLayer} ${showCard? null : classes['displaynone']}`}></div>,
        document.getElementById("backlayer-root")
      )}
    </>
  );
};

export default BackLayer;
