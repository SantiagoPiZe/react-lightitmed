import styled from "styled-components";
import Input from 'antd/lib/input';
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, rgb(82, 229, 231) 10%, rgb(19, 12, 183) 100%);
    align-items: center;
    justify-content: center;
`;
export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;   
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: white;
    border-width: 3px;
    border-radius: 4px;
    background: #ECF1FF;
    padding: 20px 20px 30px 20px;
`;

export const Image = styled.img`
    width: 60%;
`

export const InputContianer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 5px;
`;

export const InputTitle = styled.label`
    font-size: 12px;
    margin-bottom: 5px;
`;

export const StyledInput = styled(Input)`
    width: 80%;
`;

export const ErrorMessage = styled.label`
    color: red;
`

export const Register = styled(Link)`
    background: none;
    border: none;
    color: #297AA8;
    cursor: pointer;
    margin-top: 15px;
`