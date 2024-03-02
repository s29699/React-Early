import { useCallback, useState,useEffect } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);



  const passwordGenerator = useCallback(() => {
    let wordStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&";
    let pass = "";

    
    if (numAllowed) wordStr += numbers;
    if (charAllowed) wordStr += special;

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * wordStr.length );
      pass += wordStr.charAt(index)
    }

    setPassword(pass);
    //console.log(pass);
  },[numAllowed, charAllowed, length])


  // useEffect me humesha function ka reference dete nahi usko call nahi karte hai
  useEffect(passwordGenerator,[numAllowed, charAllowed, length]);

  return (
    <>
      <div>
        <h1>Password Generator</h1>
      </div>
      <div>
        <input type="text" id="i1" value={password} readOnly />
        <button>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="range" min="8" max="15" value={length} onChange={(e) => { setLength(e.target.value) }} />
        <label htmlFor="">Length {length}</label>
        <input type="checkbox" id="i3" defaultChecked={numAllowed} onChange={() => {
          // this is called passing a updater. Read the doc from react.dev if needed in future
          setNumAllowed((prev) => !prev)
        }} />
        <label htmlFor="">Numbers</label>
        <input type="checkbox" id="i4" defaultChecked={charAllowed} onChange={() => {
          setCharAllowed((prev) => !prev)
        }} />
        <label htmlFor="">Character</label>
      </div>
    </>
  )
}

export default App


// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
      
//     }

//     setPassword(pass)


//   }, [length, numberAllowed, charAllowed, setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])
//   return (
    
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className='text-white text-center my-3'>Password generator</h1>
//     <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//         />
//         <button
//         onClick={copyPasswordToClipboard}
//         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//         >copy</button>
        
//     </div>
//     <div className='flex text-sm gap-x-2'>
//       <div className='flex items-center gap-x-1'>
//         <input 
//         type="range"
//         min={6}
//         max={100}
//         value={length}
//          className='cursor-pointer'
//          onChange={(e) => {setLength(e.target.value)}}
//           />
//           <label>Length: {length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//       <input
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={() => {
//               setNumberAllowed((prev) => !prev);
//           }}
//       />
//       <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//           <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                   setCharAllowed((prev) => !prev )
//               }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//       </div>
//     </div>
// </div>
    
//   )
// }

// export default App