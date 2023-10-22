import React from 'react';
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

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Products' element={<Products />}/>
        <Route path='/Detail/:id' element={<Detail/>}/>
      </Routes>
      
      
      {}
    </div>
      );
}

export default App
