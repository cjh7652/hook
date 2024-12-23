import React, {useEffect, useState, useMemo} from 'react';

const App1 = () => {
  const [number, setNumber]=useState(0);
  const [isKorea, setIsKorea]=useState(true);

  //const location= isKorea?"한국":"외국";
  const location = useMemo(()=>{
    return {
     
        country : isKorea ? "한국":"외국",
       
    }
  }, [isKorea]);
  useEffect(()=>{
    console.log('useEfffect 호출')
  }, [location])
  return (
    <div>
      <h2>하루에 운동을 몇번 하나요?</h2>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <hr />
      <h2>어느 나라에 있나요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기를 타자</button>
    </div>
  );
};

export default App1;