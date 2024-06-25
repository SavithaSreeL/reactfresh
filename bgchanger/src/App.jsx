import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
      <div className='text-4xl font-bold fixed top-16 inset-x-0 justify-center flex flex-wrap' >My BG Changer</div>
      <div className='text-xs fixed top-28 inset-x-0 justify-center flex flex-wrap' >You can change the background color here</div>
      <div className='fixed flex flex-wrap gap-3 justify-center bottom-12 inset-x-0 px-2'>
        <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full border-2 border-red-500 text-red-500 font-medium'
          style={{ backgroundColor: 'white'}}
        >
          Red
        </button>

        <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full border-2 border-green-500 text-green-500 font-medium'
          style={{ backgroundColor: 'white'}}
        >Green</button>

      </div>
    </div>
  )
}

export default App