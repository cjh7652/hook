import {useId} from 'react'
import './App.css';

function App() {
  //useId react 18버전 고유한 아이디를 만들때 사용
 

  return (
    <div className="App">
      <MyInput />
    </div>
  );
}

function MyInput() {
  const id= useId();
  return (
    <div>
      <label htmlFor={`${id}-name`}>이름</label>
      <input type="text" id={`${id}-name`}/>
      <br />
      <label htmlFor={`${id}-age`}>나이</label>
      <input type="text" id={`${id}-age`}/>
    </div>
  )
}

export default App;
