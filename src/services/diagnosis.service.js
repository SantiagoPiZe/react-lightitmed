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

const getDiagnosisList = (userId) => {
    return axios.get(Urls.diagnosisList, {
        params: {
            userId: userId
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('Error occurred while getting your diagnoses list:', error);
        throw error;
    });
}

const getDiagnostic = (diagnosisId) => {
    return axios.get(Urls.getDiagnostic,  {
        params: {
            diagnosisId: diagnosisId
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('Error occurred while getting your diagnosis:', error);
        throw error;
    });
}

const DiagnosesService = {
    diagnose,
    getDiagnosisList,
    getDiagnostic
}

export default DiagnosesService;