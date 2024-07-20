import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';


function App() {
  const [length, setlength] = useState(8);
  const [isnumber ,setisnumber] = useState(false);
  const [ischar ,setischar] = useState(false);
  const [password,setpassword] = useState('');
  const [btncolor,setbtncolor] = useState('blue');
  const [btntext,setbtntext] = useState('Copy');
  const passwordref = useRef(null);
  const generatepassword = useCallback(()=>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isnumber){
      str += "0123456789";
    }
    if(ischar){
      str += "!@#$%^&*()_+";
    }
    for(let i=0;i<length;i++){
       let char = Math.floor(Math.random() * str.length);
       pass+= str.charAt(char)
    }
    setpassword(pass)
  },[length,ischar,isnumber])
  const markasselected = () => {
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select();
    setbtncolor('green');
    setbtntext('Copied !');
    setTimeout(() => setbtncolor('blue'), 2000);
    setTimeout(() => setbtntext('Copy'), 2000);
    setTimeout(() => passwordref.current?.blur(), 2000);

  }
  useEffect(()=>{
    generatepassword();
  },[length,ischar,isnumber])
 
  return (
    <>
       
      <h1 className='text-xl font-bold mt-4 mb-4'>MY PASSWORD GENERATOR</h1>
      <div className='flex gap-2 rounded-lg mb-2 justify-center mt-5 pt-3'>
      <input type="text" placeholder='password here' value={password}
      className=' border py-1 px-3 pb-2 focus:outline-none' ref={passwordref}></input>
      <button className='rounded-md pb-1 px-3 
      text-white focus:outline-none focus:ring-2
      focus:ring-blue-500 ' onClick={markasselected} style={{backgroundColor:btncolor}}>{btntext}</button>
      </div>

      <div className='flex gap-5 rounded-lg mb-4 justify-center mt-5 pt-3'>
      <label class="flex items-center space-x-2">
      <input
        type="range"
        min={6}
        max={100}
        className="w-64"
        value={length}
        onChange={(e) => setlength(e.target.value)}
      />
      <span>Length: {length}</span>
    </label>
        <label>
        <input type='checkbox' checked={isnumber} onChange={()=>setisnumber(!isnumber)} >
        </input> Include Numbers
        </label>
        <label>
        <input type='checkbox' checked={ischar} onChange={()=>setischar(!ischar)} >
        </input> Include Characters
        </label>
      </div>
      



  
    </>
  )
}

export default App
