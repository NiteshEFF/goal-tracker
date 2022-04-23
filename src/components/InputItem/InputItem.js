import React, {useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import  classes from "./InputItem.module.css";

const InputItem = (props) => {
    const userInputRef = useRef();
    const ageInputRef = useRef();

    const AddUser = (e)=>{
        e.preventDefault();
        const name = userInputRef.current.value;
        const age = ageInputRef.current.value;
        if(/^[a-z]+/gi.test(name) && /^[0-9]{1}/.test(age))
        {
            props.addList(name, age);
            userInputRef.current.value = "";
            ageInputRef.current.value = "";
        } else if(age < 0){
            props.showError("Age Must be > 0")
        } else{
            props.showError("Name & Age cannot be left blank");
        }
        
    };
    return (<Card className={classes.input}>
    <form onSubmit={AddUser}>
        <label htmlFor="name">Username:</label>
        <input type="text" id="name" ref={userInputRef}/>
        <label htmlFor="age">Age:</label>
        <input type= "number" id="age" ref={ageInputRef}/>
        <Button type="submit">AddUser</Button>
    </form>
    </Card>);
};
export default InputItem;