import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Login } from "./components/Login"
import { Register } from "./components/Register"

import { Slide } from "./components/Slide"



function App() {
  return (
    <>
      <BrowserRouter>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/slider" element={<Slide/>}/>
       

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
