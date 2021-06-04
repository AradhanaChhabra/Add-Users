import { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card';
import ErrorModal from "../UI/ErrorModal";
import classes from './UserForm.module.css';

export default function UserForm(props) {

    const [currentUsername, setUsername] = useState('');
    const [currentAge, setAge] = useState('');
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        //new user
        const newUser = { username: currentUsername, age: currentAge, key:Math.random().toString() };
        // validation
        if (currentAge.trim().length === 0 || currentUsername.trim().length === 0)
            return setError(
                {
                    title: "Invalid Input",
                    message: "Please enter a valid input(non-empty)"
                }
            );
        if (+currentAge < 1)  // +sign ensure current age is now a number
        return setError(
            {
                title: "Invalid Age",
                message: "Please enter a valid age ( >1)"
            }
        );
        //adding new user function
        props.addUserFunc(newUser);

        setUsername('');
        setAge('');
    }
    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    const ageHandler = (event) => {
        setAge(event.target.value);
    }
    const errorHandler=()=>{
        setError(null);
    }

    return <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={currentUsername }onChange={usernameHandler} />
                {/* for attribute for screen readers so they can know which element belongs to which input */}
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={currentAge}onChange={ageHandler} />
            <Button type="submit">
                    Add user
            </Button>
        </form>
        </Card>
        </div>
    
}