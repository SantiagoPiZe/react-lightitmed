import React, { useState, useEffect } from "react";
import * as Styles from "./styles"
import DiagnosesService from '../../services/diagnosis.service';
import AuthService from '../../services/auth.service';
import NavBar from "../../components/NavBar";
import { DiagnosesDisplay } from "../../components/DiagnosisDisplay";
import { SubmitButton } from '../../components/SubmitButton';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


export const YourDiagnoses = () => {

    const [diagnosesList, setDiagnosesList] = useState([]);
    const [currentDiagnostic, setCurrentDiagnostic] = useState([]);
    const [userData, setUserData] = useState({})
  
    const navigate = useNavigate()

    const handleClick = (id) => {
        DiagnosesService.getDiagnostic(id).then(response => {
            console.log(response)
            setCurrentDiagnostic(response.diagnostic)
        });
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Diagnostic',
            dataIndex: 'diagnostic',
            key: 'diagnostic',
        },
        {
            title: "",
            render: (_, record) => (
                <ArrowRightOutlined
                    onClick={() => handleClick(record.id)}
                />
            )
        }
    ];

    useEffect(() => {
        const userId = AuthService.getCurrentUser().id;
        setUserData(AuthService.getCurrentUser())
        DiagnosesService.getDiagnosisList(userId).then(response => {
            setDiagnosesList(response)
        });
    }, []);

    return (
        userData === null ?
        navigate('/')
        :
        <Styles.YourDiagnosesPage>
            <NavBar />
            <Styles.YourDiagnoses>
                <Styles.YourDiagnosesContainer>
                    <Styles.YourDiagnosesTitle>Your diagnoses</Styles.YourDiagnosesTitle>
                    {currentDiagnostic.length === 0 ?
                        (
                            <>
                                <Styles.DiagnosesTable
                                    dataSource={diagnosesList}
                                    columns={columns}
                                />
                            </>
                        )
                        :
                        <>
                            {DiagnosesDisplay(currentDiagnostic)}
                            {
                                SubmitButton(
                                    () => setCurrentDiagnostic([]),
                                    false,
                                    "Back to your diagnoses")
                            }
                        </>
                    }

                </Styles.YourDiagnosesContainer>
            </Styles.YourDiagnoses>
        </Styles.YourDiagnosesPage>
    )
}