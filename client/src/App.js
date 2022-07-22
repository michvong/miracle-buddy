import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/regUser/Dashboard'
import RegUserInfo from './components/regUser/RegUserInfo'
import Bookmarks from './components/regUser/Bookmarks'
import Search from './components/regUser/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* regUser pages */}
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/reguserinfo" element={<RegUserInfo user_id="2"/>}>
        </Route>
        <Route path="/bookmarks" element={<Bookmarks />}>
        </Route>
        <Route path="/search" element={<Search />}>
        </Route>

        {/* ... pages */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
