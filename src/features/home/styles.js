import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, rgb(82, 229, 231) 10%, rgb(19, 12, 183) 100%);    
`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 35px;   
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 950px;
    align-items: center;
    justify-content: center;
    border-style:  solid;
    border-radius: 10px;
    border-color: white;
    background-color: #ECF1FF;
    border-width: 3px;
    padding: 10px;
`
export const ProfileTitle = styled.label`
    font-size: 32px;
    font-weight: bolder;
    margin-bottom: 15px;
    font-family: 'Lato', sans-serif;
`

export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 150px;
`