import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginLanding from './components/landing/LoginLanding';

import Dashboard from './components/regUser/Dashboard'
import RegUserInfo from './components/regUser/RegUserInfo'
import Bookmarks from './components/regUser/Bookmarks'
import Search from './components/regUser/Search'

import CompDashboard from './components/companyAuthUser/CompDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* login pages */}
        <Route path="/loginlanding" element={<LoginLanding />}>
        </Route>

        {/* regUser pages */}
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/reguserinfo" element={<RegUserInfo />}>
        </Route>
        <Route path="/bookmarks" element={<Bookmarks />}>
        </Route>
        <Route path="/search" element={<Search />}>
        </Route>

        {/* companyAuthUser pages */}
        <Route path="/compdashboard" element={<CompDashboard />}>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
