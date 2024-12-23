import React,{useState, useEffect} from 'react';
import Timer from './component/Timer';

const App1 = () => {
  const [showTimer, setShowTimer]=useState(false);
  return (
    <div>
      {
        showTimer &&  <Timer />
      }
     
      <button onClick={()=>{setShowTimer(!showTimer)}}>toggle timer</button>
    </div>
  );
};

export default App1;