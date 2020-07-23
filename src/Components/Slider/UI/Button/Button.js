import React from "react";
import classes from "./Button.css";
import buttonIcon from "./slider-button.png"

const Slider = (props) => {
    return (
        <span onClick={props.click} className={[props.right ? classes.ButtonRight : classes.ButtonLeft, classes.Button].join(" ")}>
            <img src={buttonIcon}/>
        </span>
    );
}

export default Slider;