import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import * as Styles from "./styles";
import { renderInputs } from "../../components/RenderInputs";
import { SubmitButton } from "../../components/SubmitButton";
import logo from "../../common/assets/logo.png"

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [dateofbirth, setDateOfBirth] = useState(null);
  const [message, setMessage] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false)

  const inputs = [
    { title: "User Name", type: "username" },
    { title: "Password", type: "password" },
    { title: "Email", type: "email" },
    { title: "Full Name", type: "fullname" },
    { title: "Gender", type: "gender" },
    { title: "Date of Birth", type: "dateofbirth" },
  ]

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");

    AuthService.register(username, email, password, fullname, gender, dateofbirth).then(
      (response) => {
        if(response.status === 200)
          setSuccessMessageVisible(true)
        setMessage(response.data.message);
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
    setMessage("")
    setSuccessMessageVisible(false)
    switch (type) {
      case "username":
        setUsername(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break;
      case "fullname":
        setFullname(e.target.value)
        break;
      case "gender":
        setGender(e.target.value)
        break;
      case "dateofbirth":
        setDateOfBirth(e.$d)
        break;
      default:
        return
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const buttonDisabledHandler = () => {
    if (
      !username ||
      !emailRegex.test(email) ||
      !password ||
      !fullname ||
      !gender ||
      !dateofbirth
    ) {
      return true;
    }
    return false;
  }

  

  return (
    <Styles.RegisterContainer>
      <Styles.RegisterForm>
        <Styles.Image
          src={logo}
        />
        {message ?
          (<Styles.ErrorMessage>{message}</Styles.ErrorMessage>)
          : <></>
        }
        {successMessageVisible &&
          (<Styles.SuccessMesage> User created successfully! </Styles.SuccessMesage>) 
        }
        {renderInputs(inputs, onChangeHandler)}
        {SubmitButton(
          handleRegister,
          buttonDisabledHandler(),
          "Register"
        )}
        <Styles.Login
          to={"/Login"}
        >
          Already have an account? Register here.
        </Styles.Login>
      </Styles.RegisterForm>
    </Styles.RegisterContainer>
  );
};

export default Register;
