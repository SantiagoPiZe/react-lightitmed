import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import * as Styles from "./styles.js";
import logo from "../../common/assets/logo.png"

const Login = () => {

  const [username, setUsername] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false)
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false)
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");

    AuthService.login(username, password).then(
      () => {
        navigate("/home");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  };

  const onChangeHandler = (e, type) => {
    switch (type) {
      case "username":
        setUsernameTouched(true)
        onChangeUsername(e);
        break;
      case "password":
        onChangePassword(e);
        setPasswordTouched(true)
        break;
      default:
        return
    }
  }

  const renderInputs = (title, type) => {
    return (
      <Styles.InputContianer
        key={type}
      >
        <Styles.InputTitle>{title}</Styles.InputTitle>
        <Styles.StyledInput
          onChange={(e) => onChangeHandler(e, type)}
          status={type === "username" ? (usernameTouched && username.length === 0 ? "error" : "") : (passwordTouched && password.length === 0 ? "error" : "") }
          type={type === "password" ? "password" : ""}  
        />
      </Styles.InputContianer>
    );
  }

  return (
    <Styles.LoginContainer>
      <Styles.LoginForm>
        <Styles.Image
          src={logo}
        />
        {message ? 
        (<Styles.ErrorMessage>{message}</Styles.ErrorMessage>)
        : <></>
      }
        {renderInputs("User Name", "username")}
        {renderInputs("Password", "password")}
        <Styles.LoginButton
          onClick={handleLogin}
          disabled={username.length === 0 || password.length === 0}
        >
          Login
        </Styles.LoginButton>
        <Styles.Register
          to={"/register"}
        >
          Don't have an account yet? Register here.
        </Styles.Register>
      </Styles.LoginForm>
    </Styles.LoginContainer>
  );
};

export default Login;