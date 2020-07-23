import React, {useState, Fragment} from "react";
import classes from "./Slider.css";
import Button from "./UI/Button/Button";

const Slider = (props) => {
    const [sliderState, setSliderState] = useState({
        currentSlide: 0
    });

    const nextSlidehandler = () => {
        setSliderState(prevState => {
            let nextSlide = prevState.currentSlide + 1;
            if (nextSlide >= props.children.length)
                nextSlide = 0;
            return {currentSlide: nextSlide};

        });
    }

    return (
        <div className={classes.Slider}>
            {props.buttons && <>
                <Button left/>
                <Button click={nextSlidehandler} right/>
            </>}
            {props.children[sliderState.currentSlide]}
        </div>
    );
}

export default Slider;