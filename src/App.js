import React, {useState} from 'react'
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Axios from 'axios'

import logo from './logo.svg';
import './App.css';


// pages
import Account from './pages/Account';
import Apparel from './pages/Apparel';
import Stores from './pages/Stores';
import Sneaker from './pages/Sneaker'
import Checkout from './pages/checkout'

import ShoeStore from './components/ShoeStore';
import SneakerNav from './components/SneakerNav';

const App = () => {

    return (
      <div className="App">
      <SneakerNav/>
        <Routes>
            <Route path="/" element={<ShoeStore/>}/>
            <Route path="/Account" element={<Account/>}/>
            <Route path="/Sneaker/:name" element={<Sneaker/>}/>
            <Route path="/Apparel" element={<Apparel/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

        {/*<ShoeStore/>*/}
      </div>
    )
    
  }

export default App