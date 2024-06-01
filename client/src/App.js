import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Protected from "./components/Protected";

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Protected Component = {Home} />} />
        <Route path='/register' element = {<Register />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/home' element = {<Protected Component = {Home}/>} />
      </Routes>
    </Router>
  );
};

export default App;
