import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [color,setColor] = useState("#fff");

  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className="btnholder w-full" >
        {/* onClick expect function as argument. So, if we pass setcolor we won't be able to pass an argument with setColor. Hence we use arrow function here.
        Aur padhna jab time mile iske baare me */}
        <button onClick={()=>(setColor("red"))} className="btn">Red</button>
        <button onClick={()=>(setColor("green"))} className="btn">Green</button>
        <button onClick={()=>(setColor("black"))} className="btn">Black</button>
        <button onClick={()=>(setColor("purple"))} className="btn">Purple</button>
        <button onClick={()=>(setColor("grey"))} className="btn">Grey</button>
      </div>
    </div>
  )
}

export default App
