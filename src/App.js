import React, { useState, useContext } from 'react';
import './App.css';
import Nav from './component/navBar';
import Home from './component/home';
import Provider from 'react-redux';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {SearchFilterValue} from './component/context/SearchFiltr';


function App() {
  const [search, setSearchValue] = useState(' ');
  return (
    <>
      <Router>
        <SearchFilterValue.Provider value={{search, setSearchValue}}>

          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </SearchFilterValue.Provider>

      </Router>
    </>
  );
}

export default App;
