import { useState } from 'react';
import DisplayUser from './Components/Users/DisplayUser';
import UserForm from './Components/Users/UserForm';

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
