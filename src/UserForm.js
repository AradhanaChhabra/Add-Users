import { useState } from "react";

export default function UserForm(props) {

    const [currentUsername, setUsername] = useState('');
    const [currentAge, setAge] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        const newUser = { username: currentUsername, age:currentAge ,key: (Math.random())};
        props.addUserFunc(newUser);
    }
    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    const ageHandler = (event) => {
        setAge(event.target.value);
    }

    return <div>
        <form onSubmit={submitHandler}>
            <div>
            <label>Username</label><br/>
                <input type="text" onChange={ usernameHandler}/><br/>
            <label>Age (Years)</label><br/>
                <input type="number" onChange={ageHandler}/><br />
            </div>
            <div>
                <button type="submit">
                    Add user
                </button>
            </div>
        </form>
    </div>
    
}