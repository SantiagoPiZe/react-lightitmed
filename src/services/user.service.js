import axios from "axios";
import * as Urls from "../common/constants/urls"


const getContent = () => {
  return axios.get(Urls.API_URL );
};

const UserService = {
  getContent,
}

export default UserService;
