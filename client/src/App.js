import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginLanding from './components/landing/LoginLanding';
import RegUserLogin from './components/landing/RegUserLogin';
import CompanyAuthLogin from './components/landing/CompanyAuthLogin';
import RegUserRegister from './components/landing/RegUserRegister';

import Dashboard from './components/regUser/Dashboard'
import RegUserInfo from './components/regUser/RegUserInfo'
import Bookmarks from './components/regUser/Bookmarks'
import Search from './components/regUser/Search'
import Forward from './components/regUser/Forward'

import CompDashboard from './components/companyAuthUser/CompDashboard'
import CompUserInfo from './components/companyAuthUser/CompUserInfo'
import CompanyInfo from './components/companyAuthUser/CompanyInfo'
import CompEdit from './components/companyAuthUser/CompEdit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* login pages */}
        <Route path="/loginlanding" element={<LoginLanding />}>
        </Route>
        <Route path="/reguserlogin" element={<RegUserLogin />}>
        </Route>
        <Route path="/companyauthlogin" element={<CompanyAuthLogin />}>
        </Route>
        <Route path="/reguserregister" element={<RegUserRegister />}>
        </Route>

        {/* regUser pages */}
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/reguserinfo" element={<RegUserInfo user_id="2"/>}>
        </Route>
        <Route path="/bookmarks" element={<Bookmarks />}>
        </Route>
        <Route path="/search" element={<Search />}>
        </Route>
        <Route path="/forward" element={<Forward />}>
        </Route>

        {/* companyAuthUser pages */}
        <Route path="/compdashboard" element={<CompDashboard />}>
        </Route>
        <Route path="/compuserinfo" element={<CompUserInfo user_id="2" />}>
        </Route>
        <Route path="/companyinfo" element={<CompanyInfo  />}>
        </Route>
        <Route path="/compedit" element={<CompEdit />}>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
