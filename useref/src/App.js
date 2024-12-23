import {useState, useRef} from 'react'
import './App.css';

function App() {
 /*  const [count, setCount]=useState(0); */
  const [render, setRender]=useState(0);
  const countRef= useRef(0);
  let countVar=0;

/*   console.log(countRef)
  console.log('렌더링 ...') */
  const doRendering = () =>{
    setRender(render+1)
  }
  const increaseVar= () =>{
    countVar = countVar+1;
    console.log('Var :',countVar )
  }
  const increaseCountRef= () =>{
    countRef.current=countRef.current+1;
    console.log('Ref : ', countRef.current)
  }
  return (
    <div className="App">
{/*       <p>state: {count}</p> */}

      <p>Ref:{countRef.current} </p>
      <p>Var: {countVar}</p>
      {/* <button onClick={increaseCountState}>state 변경</button> */}
      <button onClick={doRendering}>렌더!!!</button>
      <button onClick={increaseCountRef}>Ref 변경</button>
      <button onClick={increaseVar}>Var 변경</button>
    </div>
  );
}

export default App;
