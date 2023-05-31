import styled from "styled-components"

export const LoginButton = styled.button`
    width: 150px;
    height: 40px;
    margin-top: 25px;
    background-color: #297AA8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled{
        background-color: gray;
        cursor: auto;
    }
`