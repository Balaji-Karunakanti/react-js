import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCounter] = useState(15);
  const func = ()=>{
    if(count <20){
      setCounter(count+1)
    }
      
    
  }
 
  const func1 =()=>{
    if(count>0){
          setCounter(count-1);
    }
  }
  
  return (
    <>
      <p>Current value :{count}</p>
      <button onClick={func}>Add value</button>
      <button onClick={func1}>Remove value</button>
      <button onClick={()=> setCounter(15)}>Reset</button>
    </>
  )
}

export default App
