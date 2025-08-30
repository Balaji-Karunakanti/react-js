import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
   const [color,setColor] = useState("white");

   function func(){
     setColor("red")
   }

   function func1(){
     setColor("yellow")
   }

   function func2(){
     setColor("black")
   }
  return (
    
     <div style={{ backgroundColor: color, 
  height: "100vh",   // 100% of viewport height
  width: "100vw",    // optional: 100% of viewport width
  display: "flex",   // optional: center button
  justifyContent: "center",
  alignItems: "center"}}>
       
     <button onClick={func} >red</button>
     <button onClick={func1} >yellow</button>
     <button onClick={func2} >black</button>
   
    </div>
    
  )
}

export default App
