import { useState, useEffect } from 'react'
import './App.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Product from './Components/Product';
import Products from './Components/Products';
import { Route, Routes} from 'react-router-dom' 
function App() {
 
  return (
    <div className="App">
      <Nav />
      <Routes>
     <Route exact path='/' Component={Home}/>
     <Route exact path='/products' Component={Products}/>
     <Route exact path='/products/:id' Component={Product}/>
     </Routes>
    </div>
  )
}


export default App
