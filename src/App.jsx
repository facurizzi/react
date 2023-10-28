import React, { useState } from 'react';
import styles from "./style.module.css"
import Nav from "./components/NavBar/NavBar"
import ItemListContainer from './components/Items/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/Details/ItemDetailContainer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Products from './components/pages/Products';
import {Route, Routes} from 'react-router'
import Detail from './components/pages/Detail';
import UserContext from './context/UserContext';
import CartContextProvider from './context/cartContext/CartContextProvider';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';

function App() {
  
  return (
    <div className="App">
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Products' element={<Products />}/>
          <Route path='/Detail/:id' element={<Detail/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout/:orderId' element={<Checkout />}/>
        </Routes>
        </CartContextProvider>
      {}
    </div>
      );
}

export default App
