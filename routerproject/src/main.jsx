import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, BrowserRouter , Routes } from 'react-router-dom'

import Layout from './layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github,{InfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route loader={InfoLoader} path='git' element={<Github/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
   {/* <App/> */}
  </StrictMode>
)
