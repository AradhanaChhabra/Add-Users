import {Fragment} from "react";
import reactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

const Backdrop = (props) => <div className={classes.backdrop} onClick={props.onConfirm} />; 

const Modal = (props) => (<Card className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
</Card>);

export default function ErrorModal(props) {
    // const container = document.createElement('div');
    // document.body.appendChild(container);


    return <Fragment>
        {reactDom.createPortal(
            // <Backdrop onConfirm={props.onConfirm} />, container)}
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById("backdrop")
        )}
        {reactDom.createPortal(
            <Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />,
            document.getElementById("overlay"))}
    </Fragment>
}