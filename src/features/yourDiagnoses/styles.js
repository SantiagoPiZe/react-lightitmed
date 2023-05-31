import styled from "styled-components"
import { Table } from "antd"

export const YourDiagnosesPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, rgb(82, 229, 231) 10%, rgb(19, 12, 183) 100%);
`
export const YourDiagnoses = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 35px;   
`
export const YourDiagnosesContainer = styled.div`
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
export const YourDiagnosesTitle = styled.label`
    font-size: 32px;
    font-weight: bolder;
    margin-bottom: 15px;
    font-family: 'Lato', sans-serif;
`

export const DiagnosesTable = styled(Table)`
    margin-top: 25px;
    width: 100%;
`