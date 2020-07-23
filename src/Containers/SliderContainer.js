import React, {useState} from "react";
import classes from "./SliderContainer.css";
import Slider from "../Components/Slider/Slider";
import image1 from "../images/1.jpg"
import image2 from "../images/2.png"

const SliderContainer = (props) => {
    const [myState, setMyState] = useState([])

    return (
        <div className={classes.Container}>
            <Slider buttons>
                <img src={image1} />
                <img src={image2} />
            </Slider>
        </div>
    );
}

export default SliderContainer;