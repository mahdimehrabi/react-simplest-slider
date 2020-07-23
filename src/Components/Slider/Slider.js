import React, {useState, Fragment} from "react";
import classes from "./Slider.css";

const Slider = (props) => {
    const [myState, setMyState] = useState([]);

    const buttons = (
        <Fragment>
            <span className={classes.ButtonRight}></span>
            <span className={classes.ButtonLeft}></span>
        </Fragment>
    );

    return (
        <div className={classes.Slider}>

        </div>
    );
}

export default Slider;