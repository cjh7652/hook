import {useState, useCallback, useEffect} from 'react'
import './App.css';

function App() {
  //useCallback도 useMemo와 같이 memoization을 최적화하기 위함
  //memoization-자주 사용하는 값을 반복적으로 받아오는 값을 계산해야 하면 미리 계산한 값을 캐싱해 놓은 방법으로 해당하는 값이 반복적으로 계산하는 값을 메모리에서 꺼내서 재사용하는 최적화 기법

 /*  useCallback(()=>{
    return value;
  }, [item]) */ //의존성 배열에 있는 값이 변경되지 않는 이상 위 콜백함수는 다시 초기화 되지 않음

  const [number, setNumber] = useState(0)
  const someFunction =useCallback(()=>{
   
      console.log(`sumeFunction:number : ${number}`)
   
  },[])
  useEffect(()=>{
    console.log(`sumeFunction이 변경 되었습니다.`)
  }, [someFunction])
  return (
    <div className="App">
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <br />
      <button onClick={someFunction}>click</button>
    </div>
  );
}

export default App;
