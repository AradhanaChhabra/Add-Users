import Card from "../UI/Card";
import classes from './DisplayUser.module.css';

export default function DisplayUser(props) {
    return <Card className={classes.users}>
        <ul>
        {
            props.arr.map((user) => <li key={user.key}>{user.username} ({user.age} years old)</li>)
        }
        </ul>
        </Card>
}