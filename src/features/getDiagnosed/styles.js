import styled from 'styled-components';
import { Select } from 'antd';

export const GetDiagnosedPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, rgb(82, 229, 231) 10%, rgb(19, 12, 183) 100%);
`
export const GetDiagnosed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 35px;   
`
export const GetDiagnosedContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1350px;
    align-items: center;
    border-style:  solid;
    border-radius: 10px;
    border-color: white;
    background-color: #ECF1FF;
    border-width: 3px;
    padding: 10px;
    min-height: 80vh;
`
export const DiagnosisTitle = styled.label`
    font-size: 32px;
    font-weight: bolder;
    margin-bottom: 15px;
    font-family: 'Lato', sans-serif;
`
export const HelperText = styled.label`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    font-family: 'Lato', sans-serif;
`

export const SymptomList = styled(Select)`
    width: 70%
`

export const SelectedSymptoms = styled.div`
    display:flex;
    flex-direction: row;
    width: 70%
    min-height: 30%;
    background-color: white;
`
export const DiagnosisContainer = styled.div`
    width: 100%;
`

export const ErrorMessage = styled.label`
    color: red;
`