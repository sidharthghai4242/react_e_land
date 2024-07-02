import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Aboutpage from './pages/Aboutpage'
import Header from './components/Header'
export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/profile" element={<Aboutpage/>}/>

  </Routes>
  </BrowserRouter>
}
