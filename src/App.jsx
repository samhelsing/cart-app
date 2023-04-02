import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './detailed/components/Cart'
// import Navbar from './components/Navbar'
//  import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//  import {Cart} from './pages/Cart'
//  import Shop from './pages/Shop'
// import {ShopContext} from './context/ShopContext'
import Header from './detailed/components/Header'
import Home from './detailed/components/Home'
function App() {

return(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />

    </Routes>
  </BrowserRouter>
)






  // return (
  //   <div className="App">
  //     <ShopContext>
  //     <Router>
  //     <Navbar />
  //       <Routes>
  //         <Route path='/' element={<Shop />} />
  //         <Route path='/cart' element={<Cart />} />
  //       </Routes>
  //     </Router>
  //     </ShopContext>
  //   </div>
  // )
}

export default App
