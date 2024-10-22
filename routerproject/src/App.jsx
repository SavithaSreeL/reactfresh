import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/Contact'
import Layout from './layout'
import Github from './components/Github/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <></>
  //  <BrowserRouter>
  //  <Routes>
  //  <Route path='/' element={<Layout/>}>
  //   <Route path='/' element={<Home/>}></Route>
  //   <Route path='/about' element={<About/>}></Route>
  //   <Route path='/contact' element={<Contact/>}></Route>
  //   <Route path='/git' element={<Github/>}></Route>

  //   </Route>
  //  </Routes>
  //  </BrowserRouter>
  )
}

export default App