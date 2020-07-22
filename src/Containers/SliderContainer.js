import React, {useState} from "react";
import classes from "./SliderContainer.css";
import Slider from "../Components/Slider/Slider";

const SliderContainer = (props) => {
    const [myState, setMyState] = useState([])

    return (
        <div className={classes.Container}>
            <Slider/>
        </div>
    );
}

export default SliderContainer;