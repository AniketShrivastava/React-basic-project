import { useState } from "react"


function App() {
  const[length,setLength]= useState(0)
  const[numberAllowed,setNumberAllowed]= useState(false)
  const[charAllowed,setCharAllowed]= useState(false)
  const[Password,setPassword]= useState("")
 

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500 ">
    <h1 className="text-center text-white my-3">Password Ganerator</h1>
   <div className="flex shadow rounded-lg overflow-hidden mb-4"></div>
    </div>
    </>
  )
}

export default App
