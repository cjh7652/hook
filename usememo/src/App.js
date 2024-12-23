
import './App.css';
import {useMemo, useState} from 'react'

const hard= (number) =>{
  console.log('엄청 어려운 계산!!');
  for(let i=0; i<999999999; i++){}
  return number+10000
}
const easy= (number) =>{
  console.log('엄청 쉬운 계산!!');
  return number+1
}
function App() {
  // useMemo useCallback
  //동일한 값을 반복적으로 나타내야 할때 맨처음 값을 저장(메모리에 저장) 필요할때마다 불러서 사용

  //const value=useMemo(()=>{}, [])

  const [hardNumber, setHardNumber] = useState(1)
  const [easyNumber, setEasyNumber] = useState(1)
  const hardSum=useMemo(()=>{
    return hard(hardNumber)
  }, [hardNumber])
  const easySum=easy(easyNumber)
  return (
    <div className="App">
      <h2>무지 어려운 계산</h2>
      <input type="number" value={hardNumber} onChange={(e)=>{setHardNumber(parseInt(e.target.value))}}/>
      <span>+ 10000 = {hardSum} </span>

      <br />
      <h2>무지 쉬운 계산</h2>
      <input type="number" value={easyNumber} onChange={(e)=>{setEasyNumber(parseInt(e.target.value))}}/>
      <span>+ 1 = {easySum} </span>
    </div>
  );
}

export default App;
