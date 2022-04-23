import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import  classes from "./InputItem.module.css";

const InputItem = (props) => {
    const [name, changename] = useState("");
    const [age, updateAge] = useState("");

    const AddUser = (e)=>{
        e.preventDefault();
        if(/^[a-z]+/gi.test(name) && /^[0-9]{1}/.test(age))
        {
            props.addList(name, age);
            changename("");
            updateAge("");
        } else if(age < 0){
            props.showError("Age Must be > 0")
        } else{
            props.showError("Name & Age cannot be left blank");
        }
        
    };

    const addName = (e) => {
        changename(e.target.value);
    };

    const addAge = (e) => {
        updateAge(e.target.value)
    };

    return (<Card className={classes.input}>
    <form onSubmit={AddUser}>
        <label htmlFor="name">Username:</label>
        <input type="text" id="name" value={name} onChange={addName}/>
        <label htmlFor="age">Age:</label>
        <input type= "number" id="age" value={age} onChange={addAge}/>
        <Button type="submit">AddUser</Button>
    </form>
    </Card>);
};
export default InputItem;