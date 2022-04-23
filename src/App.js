import React, {useState} from 'react';
import InputItem from './components/InputItem/InputItem';
import UserList from './components/UserList/UserList';
import ErrorModel from './components/UI/ErrorModel';

function App() {

  const [userList, addUserList] = useState([
    {username: "Niranjan Shyam Das", "age":21, "id":"key001"},
    {username: "Nitesh", "age":21, "id":"key002"}
  ]);
  const [dialougeDisplay, showDialouge] = useState(false);
  const [displayMsg, updateMsg] = useState("");

  const addUser = (name, age)=>{
    const user = {username: name, age:age, id:new Date().getTime()};
    addUserList(oldUser => {
      return [user,...oldUser]
    });
  };

  const displayMessage= (message) => {
    updateMsg(message);
    showDialouge(true);
  }

  const hideDisplay = () =>{
    showDialouge(false);
  };

  
  return (
    <div>
      {(dialougeDisplay) && <ErrorModel title="An Error Occured" message={displayMsg} hideModel={hideDisplay}/>}
      <InputItem addList={addUser} showError={displayMessage}/>
      <UserList userList={userList} />
    </div>
  );
}

export default App;
