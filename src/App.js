import React, {useState} from 'react'
import Axios from 'axios'

import logo from './logo.svg';
import './App.css';


import ShoeStore from './components/ShoeStore';

const App = () => {

    return (
      <div className="App">
        <ShoeStore/>
      </div>
    )
    
  }

export default App