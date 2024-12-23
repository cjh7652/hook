
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [count, setCount]=useState(1);
  const [name, setName]=useState('');

  const countUpdate=()=>{
    setCount(count+1)
  }

  const inputChange = (e)=>{
    setName(e.target.value)
  }

  //clean up
 /*  useEffect(()=>{
    //실행
    console.log('렌더링')
  }) */

    // 카운트가 변경될때마다  렌더링 됨
  useEffect(() =>{
    console.log('렌더링')
  },[name, count])

 /*  useEffect(() =>{
    console.log('렌더링')
  },[]) */
  return (
    <div className="App">
      <button onClick={countUpdate}>upDate</button>
      <br />
      <span>{count}</span>
      <br />
      <input type="text" value={name} onChange={inputChange} />
      <br />
      <span>name : {name}</span>
    </div>
  );
}

export default App;
