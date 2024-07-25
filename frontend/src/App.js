import React,{useState,useEffect} from 'react'
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Loginform from './components/loginform';
import Registrationform from './components/registrationform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/form';
import Getdata from './components/getdata';
import Addproduct from './components/addproduct';
import Shop from './components/shop';
import Shopnew from './components/shopnew';
import Favor from './components/favor';
function App() {

  return (
    <div className="flex">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={(localStorage.getItem("token"))?<Home/>:<Loginform/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/loginform' element={<Loginform/>} />
        {/* <Route path='/loginform' element={(localStorage.getItem("token"))?<Loginform/>:<Home/>} /> */}
        <Route path='/registrationform' element={<Registrationform/>} />
        <Route path='/form' element={<Form/>}/>
        <Route path='/getdata' element={<Getdata/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shopnew' element={<Shopnew/>}/>
        <Route path='/favor' element={<Favor/>}/>
        <Route path='/' element={<Header/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
