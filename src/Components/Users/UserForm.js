import { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './UserForm.module.css';

export default function UserForm(props) {

    const [currentUsername, setUsername] = useState('');
    const [currentAge, setAge] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        //new user
        const newUser = { username: currentUsername, age: currentAge, key: (Math.random()) };
        // validation
        if (currentAge.trim().length === 0 || currentUsername.trim().length === 0)
            return;
        if (+currentAge < 1)
            return;
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

    return <Card className={classes.input}>
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
    
}