import { useState } from 'react'
import './App.css'
import About from './Component/About'
import Contact from './Component/Contact'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Component/Home'

function App() {


  return (
    
    <div className='main'>
    <nav>
   <div className='nav-box'>
   <Link to='/'><img src="https://camo.githubusercontent.com/7798ac9816844b12782b0a86e183dd4029f2070daf2dc3fcd77a1c1138d2ffd7/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f4b616c7669756d2d4c6f676f2e706e67" alt="" className="logo" /></Link>
   <Link to='/about'>About</Link>
   <Link to='/contact'>Contact</Link>
   </div>
    </nav>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
    </div>
  )
}

export default App
