import { Progress, Table } from "antd";
import styled from "styled-components";

export const DiagnosesDisplayContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-width: 90%;

`

export const DiagnosesTable = styled(Table)`
    margin-top: 25px;
    min-width: 90%;
`

export const Accuracy = styled(Progress)`
`