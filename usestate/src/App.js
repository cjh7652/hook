
import './App.css';
import {useState} from 'react' //컴포넌트 상태관리 훅
//간편하게 생성하고 업데이트할수 있도록 해줌

function App() {
  const [time, setTime]=useState(1);

  const handleClick= () =>{
    let newTime;
    if(time >= 12){
      newTime=1;
    }else{
      newTime = time+1;
    }
    setTime(newTime)

  }

  console.log('업데이트')
  return (
    <div className="App">
      <span>{time}시</span>
      <br />
      <button onClick={()=>{ handleClick() }}>click</button>
    </div>
  );
}

export default App;
