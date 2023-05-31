import React, { useState, useLayoutEffect } from "react";
import * as Styles from "./styles"
import NavBar from "../../components/NavBar";
import avatar from "../../common/assets/avatar.png"
import AuthService from "../../services/auth.service"
import { renderInputs } from "../../components/RenderInputs";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [userData, setUserData] = useState({})

    const navigate = useNavigate()

    const inputs = [
        { title: "User Name", type: "username" },
        { title: "Email", type: "email" },
        { title: "Full Name", type: "fullName" },
        { title: "Gender", type: "gender" },
        { title: "Date of Birth", type: "dateOfBirth" },
    ]

    useLayoutEffect(() => {
        setUserData(AuthService.getCurrentUser())
    }, [])

    return (
        userData === null ?
        navigate('/')
        :
        <Styles.HomeContainer>
            <NavBar />
            <Styles.Profile>
                <Styles.ProfileContainer>
                    <Styles.ProfileTitle>Your Profile</Styles.ProfileTitle>
                    <Styles.ProfileImage src={avatar} alt="profile" />
                    {renderInputs(inputs, undefined, userData)}
                </Styles.ProfileContainer>
            </Styles.Profile>
        </Styles.HomeContainer>
    )
}

export default Home;