import React,{useEffect, useState, useRef} from 'react';

const App1 = () => {
  const [count, setCount] =useState(1);
  /* const [renderCount, setRenderCount] =useState(1); */
  const renderCount=useRef(1)

  useEffect(()=>{
    renderCount.current=renderCount.current+1
    console.log('렌더링 수:',  renderCount.current)
    /* setRenderCount(renderCount+1) */

  })
  //useRef는 변화는 감지 하지만 그 변화가 렌더링을 발생키키면 안될때 유용함
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={()=>setCount(count+1)}>더하기</button>
    </div>
  );
};

export default App1;