import React, {useState} from 'react';
import './App'

const App1 = () => {
  const [names, setName]=useState(['조지현', '조지영']);
  const [input, setInput]=useState('');

  const InputChange=(e)=>{
   console.log(e.target.value)
   setInput(e.target.value)
  }
  const upload=()=>{
    setName((prevState) => {
      console.log('이전 데이터: ', prevState)
      return [input, ...prevState]
    })
  }
  return (
    <div className='App'>
      <input type="text" value={input} onChange={InputChange} />
      <button onClick={upload}>추가</button>
      {
        names.map((name, i)=>{
          return <p key={i}>{name}</p>
        })
      }
    </div>
  );
};

export default App1;