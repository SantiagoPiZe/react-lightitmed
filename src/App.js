import React, { useEffect } from "react";
import './App.css';
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import EventBus from "./common/EventBus";
import AuthVerify from "./common/auth-verify";
import AuthService from "./services/auth.service";
import Login from "./features/login";
import Register from "./features/register";
import Home from "./features/home";
import { GetDiagnosed } from "./features/getDiagnosed";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const logOut = () => {
    AuthService.logout();
  };

  useEffect(() => {
    EventBus.on("logout", logOut);

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  return (
    <div>
      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/logout' element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newDiagnosis" element={<GetDiagnosed/>} />
        </Routes>
      </div>
      <AuthVerify logOut={logOut} />
    </div>
  );
}

export default App;
