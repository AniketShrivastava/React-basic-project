import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setCounter]= useState(15)

  const addValue = ()=>{
    // single value count
    // setCounter(counter+1)

    // multiple count 
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)

  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Counter App</h1>
<h2>Counter Value: {counter}</h2>

<button onClick={addValue}>Add Value</button>
<br/>
<button onClick={removeValue}>Remove Value</button>
<p>footer: {counter}</p>

    </>
  )
}

export default App
