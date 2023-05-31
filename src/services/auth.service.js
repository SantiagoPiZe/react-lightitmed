import axios from "axios";
import * as Urls from "../common/constants/urls"

const register = (username, email, password, fullName, gender, dateOfBirth) => {
  return axios.post(Urls.registerUrl, {
    username,
    email,
    password,
    fullName,
    gender,
    dateOfBirth,
  });
};

const login = (username, password) => {
  return axios
    .post(Urls.loginUrl, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  // return axios.post(Urls.API_URL + "signout").then((response) => {
  //   return response.data;
  // });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
