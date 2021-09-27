import './App.css';
import Header from './Header';
import NotePad from './NotePad';
import {useState} from 'react';

function App() {

  const [checkList, setCheckList] = useState(['Make my to-do-list']);

  const makeList = (task) => {
    setCheckList([...checkList, task]);
  }


  return (
    <div className="App">
      <Header></Header>
      <NotePad makeList={makeList}  checkList={checkList}></NotePad>
    </div>
  );
}

export default App;

// 1 import state
// 2 Define State const
// 3 define stat handler
// 4 passhandler to child