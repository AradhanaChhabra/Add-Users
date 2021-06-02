export default function DisplayElement(props) {
    // let disp = null;
    // if (props.name.length ===0) {
    //     disp = alert("enter a valid username.");
    // }
    // else if (props.age < 0) {
    //     disp = alert("enter a valid age");
    // }
    // else {
    //     disp = (
    //         < div >
    //         <p>{props.name} ({props.age} years old)</p>
    //         </div >
    //     );
    // }

    // return disp ;
    return < div >
             <p>{props.name} ({props.age} years old)</p>
             </div >;
}