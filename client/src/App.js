import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './components/regUser/Dashboard'
import RegUserInfo from './components/regUser/RegUserInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>

        <Route path="/reguserinfo" element={<RegUserInfo />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
