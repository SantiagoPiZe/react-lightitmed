import axios from "axios";
import * as Urls from "../common/constants/urls"

const getSymptoms = () => {
    return axios.get(Urls.getSymptomsUrl)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('Error occurred while fetching symptoms:', error);
        throw error;
    });
}

const SymptomsService = {
    getSymptoms
}

export default SymptomsService;