import { useState } from 'react';
import './App.css';
import DisplayUser from './DisplayUser';
import UserForm from './UserForm';

function App() {
  const [currentUsers, setUsers] = useState([]);

  const addUserFunc = (newUser) => {
    setUsers((prevState) => {
      return  [...prevState, newUser  ]
    });
  }
  console.log("hey");
  console.log(currentUsers);

  return (<div>
    <UserForm addUserFunc={addUserFunc} />
    <DisplayUser arr={currentUsers}/>
  </div>);
}

export default App;
