import DisplayElement from "./DisplayElement"

export default function DisplayUser(props) {
    return <div>
        {
            props.arr.map((val, index) => {
                return <DisplayElement name={val.username} age={val.age} key={val.key}/>
            })
        }
    </div>
}