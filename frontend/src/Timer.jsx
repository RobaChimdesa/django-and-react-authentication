import React from 'react'
import { useState,useEffect } from 'react'

function Timer() {
  const [timer,setTimer] = useState(new Date())
  useEffect(()=>
  {
    setInterval(() => {
     setTimer(new Date());

    }, 1000)

  },[])

  return (
    <div>
      <p><b>Timer Example</b></p>
      <p>{timer.toLocaleTimeString()}</p>
     
    </div>
  )
}

export default Timer
