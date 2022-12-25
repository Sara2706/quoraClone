import React, { useState } from 'react';
import './App.css';
import Nav from './component/navbar/navBar';
import Temp from './pages/home&notiTemp/h&nTemplate';
import Home from './pages/home/home';
import Follow from './pages/follow/follow';
import Notification from './pages/notification/notification'
import Provider from 'react-redux';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { SearchFilterValue } from './component/context/SearchFiltr';


function App() {
  const [searchv, setSearchValue] = useState(' ');
  return (
    <>
      <Router>
        <SearchFilterValue.Provider value={{ searchv, setSearchValue }}>
          <Nav />
          <Routes>
            <Route path='/' element={<Temp />} >
              <Route index element={<Home />} />
              <Route path='follow' element={<Follow />} />
            </Route>
            <Route path='/topic/:topic' element={<Temp />} >
              <Route index element={<Home />} />
            </Route>
            <Route path='/notification' element={<Notification />} />
          </Routes>
        </SearchFilterValue.Provider>

      </Router>
    </>
  );
}

export default App;
