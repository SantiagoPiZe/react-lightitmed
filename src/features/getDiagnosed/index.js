import React, { useEffect, useState } from 'react';
import SymptomsService from '../../services/symptom.service';
import DiagnosesService from '../../services/diagnosis.service';
import AuthService from '../../services/auth.service';
import * as Styles from './styles';
import NavBar from "../../components/NavBar";
import { SubmitButton } from '../../components/SubmitButton';
import { DiagnosesDisplay } from '../../components/DiagnosisDisplay';

export const GetDiagnosed = () => {

    const [symptoms, setSymptoms] = useState([])
    const [selectedSymptoms, setSelectedSymptoms] = useState([])
    const [diagnosis, setDiagnosis] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SymptomsService.getSymptoms();
                const tempSymptoms = data.map(symptom => {
                    return { id: symptom.ID, label: symptom.Name, value: symptom.ID.toString() }
                })
                setSymptoms(tempSymptoms)
            } catch (error) {
                console.error('Error occurred while fetching symptoms:', error);
            }
        }
        fetchData();
    }, [])

    const handleSelectSymptom = (symptom) => {
        const isSymptomSelected = selectedSymptoms.some(item => item === symptom);

        if (isSymptomSelected) {
            const updatedSymptoms = selectedSymptoms.filter(item => item !== symptom);
            setSelectedSymptoms(updatedSymptoms);
        } else {
            const updatedSymptoms = [...selectedSymptoms, symptom];
            setSelectedSymptoms(updatedSymptoms);
        }
    }

    const handleSubmitSymptoms = async () => {
        const userData = AuthService.getCurrentUser();
        DiagnosesService.diagnose(selectedSymptoms, userData.gender, new Date(userData.dateOfBirth).getFullYear(), userData.id)
            .then(result => {
                setDiagnosis(result);
            })
            .catch(error => {
                console.error('Error occurred while getting a diagnosis:', error);
            });
    }

    return (
        <Styles.GetDiagnosedPage>
            <NavBar />
            <Styles.GetDiagnosed>
                <Styles.GetDiagnosedContainer>
                    <Styles.DiagnosisTitle>Self-Diagnosis</Styles.DiagnosisTitle>
                    <Styles.HelperText>Select your symptoms from bellow</Styles.HelperText>
                    <Styles.SymptomList
                        showSearch
                        mode="multiple"
                        placeholder="Select your symptoms"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={symptoms}
                        pag
                        onSelect={(value) => handleSelectSymptom(value)}
                        onDeselect={(value) => handleSelectSymptom(value)}
                    />
                    {
                        diagnosis.length > 0 &&
                        (
                            <Styles.DiagnosisContainer>
                                {
                                    DiagnosesDisplay(diagnosis)
                                }
                            </Styles.DiagnosisContainer>
                        )
                    }
                    {SubmitButton(
                        handleSubmitSymptoms,
                        selectedSymptoms.length === 0,
                        "Get your Diagnosis"
                    )}
                </Styles.GetDiagnosedContainer>
            </Styles.GetDiagnosed>
        </Styles.GetDiagnosedPage>
    )
}