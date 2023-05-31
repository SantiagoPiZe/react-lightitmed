import axios from "axios";
import * as Urls from "../common/constants/urls"

const diagnose = (symptoms, gender, yearOfBirth, userId) => {
    return axios.get(Urls.diagnose, {
        params: {
            symptoms: JSON.stringify(symptoms),
            gender: gender,
            yearOfBirth: yearOfBirth,
            userId: userId
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error occurred while getting a diagnosis:', error);
            throw error;
        });
}

const DiagnosesService = {
    diagnose
}

export default DiagnosesService;