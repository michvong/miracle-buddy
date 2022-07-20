import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './components/regUser/Dashboard'
import RegUserInfo from './components/regUser/RegUserInfo'
import Bookmarks from './components/regUser/Bookmarks'
import Search from './components/regUser/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard />}>
        </Route>

        <Route path="/reguserinfo" element={<RegUserInfo />}>
        </Route>

        <Route path="/bookmarks" element={<Bookmarks />}>
        </Route>

        <Route path="/search" element={<Search />}>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
