import React from "react";
import Card from "./Card";
import classes from "./ErrorModel.module.css";
import Button from "./Button";

const ErrorCard = props => {
    return <Card className={classes.modal}>
    <header className={classes.header}>
    <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
    <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
        <Button clickHandler={props.hideModel}>Okay</Button>
    </footer>
</Card>
};

export default ErrorCard;