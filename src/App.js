import React, { useEffect, useCallback } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { logout } from "./actions/auth";
import EventBus from "./common/EventBus";
import AuthVerify from "./common/AuthVerify";
import Login from "./features/login";
import Register from "./features/register";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  });

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <div>
      <div className="container">
        <Routes>
          {/*<Route exact path={["/", "/home"]} component={Home} />*/}
          <Route path="/login" element={Login()} />
          <Route path="/register" element={Register()} />
        </Routes>
      </div>

      <AuthVerify logOut={logOut} />
    </div>
  );
}

export default App;
