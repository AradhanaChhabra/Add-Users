import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card';
import ErrorModal from "../UI/ErrorModal";
import classes from './UserForm.module.css';

export default function UserForm(props) {

    const nameInputRef = useRef();
    const ageRef = useRef();
   

    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        //new user
        let enteredUsername = nameInputRef.current.value;
        let enteredAge = ageRef.current.value;
        const newUser = { username: enteredUsername, age: enteredAge, key:Math.random().toString() };
        // validation
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0)
            return setError(
                {
                    title: "Invalid Input",
                    message: "Please enter a valid input(non-empty)"
                }
            );
        if (+enteredAge < 1)  // +sign ensure entered age is now a number
        return setError(
            {
                title: "Invalid Age",
                message: "Please enter a valid age ( >1)"
            }
        );
        //adding new user function
        props.addUserFunc(newUser);
        nameInputRef.current.value = '';
        ageRef.current.value = '';
    }
    const errorHandler=()=>{
        setError(null);
        // document.removeChild(container);
    }

    return <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
                <input id="username" type="text" ref={nameInputRef}/>
                {/* for attribute for screen readers so they can know which element belongs to which input */}
            <label htmlFor="age">Age (Years)</label>
                {/* UNCONTROLLED COMPONENTS : value(internal state) not controlled by react */}
                <input id="age" type="number" ref={ageRef} />
            <Button type="submit">
                    Add user
            </Button>
        </form>
        </Card>
        </div>
    
}