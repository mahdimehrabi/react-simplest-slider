import React, {useState, Fragment} from "react";
import classes from "./Slider.css";
import Button from "./UI/Button/Button";

const Slider = (props) => {
    const [myState, setMyState] = useState([]);

    return (
        <div className={classes.Slider}>
            {props.buttons&&<>
                <Button left/>
                <Button right/>
            </>}
        </div>
    );
}

export default Slider;