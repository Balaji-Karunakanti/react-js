import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({name,age = 20}) {
   
  
  return (
    <>
     <h3>{name} age is {age} </h3>
    
    </>
  )
}


export default App
