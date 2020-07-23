import React from "react";
import classes from "./Button.css";
import buttonIcon from "./slider-button.png"

const Slider = (props) => {
    return (
        <span className={classes.ButtonRight}>
            <img src={buttonIcon}/>
        </span>
    );
}

export default Slider;