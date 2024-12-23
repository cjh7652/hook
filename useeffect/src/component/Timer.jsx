import React,{ useEffect} from 'react';

const Timer = () => {
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log('타이머가 돌아가고 있어요')
    },1000);
    return () => {
      clearInterval(timer);
      console.log('타이머가 멈췄습니다.')
    }
  }, [])
 
  return (
    <div>
      <span> 타이머가 돌가하고 있습니다. 콘솔화면 확인해주세요</span>
    </div>
  );
};

export default Timer;