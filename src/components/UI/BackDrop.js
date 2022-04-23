import React from "react";
import classes from "./BackDrop.module.css";

const BackDrop = props => {
    return <div className={classes.backdrop} onClick={props.hideModel}/>
};

export default BackDrop;