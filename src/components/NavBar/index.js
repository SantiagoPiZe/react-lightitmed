import React from "react";
import * as Styles from "./styles"
import logo from "../../common/assets/logo.png"

const NavBar = () => {

    const navOptions = [
        { displayName: "Home", path: "/home", id: "home" },
        { displayName: "Get Diagnosed", path: "/newDiagnosis", id: "newDiagnosis" },
        { displayName: "Your Diagnoses", path: "/diagnoses", id: "diagnoses" },
        { displayName: "Log Out", path: "/logout", id: "logout" },
    ]

    return (
        <Styles.NavBar>
            <Styles.Image
                src={logo}
            />
            {navOptions.map((option) => (
                <Styles.NavBarOption key={option.id} id={option.id} to={option.path}>{option.displayName}</Styles.NavBarOption>
            ))}
        </Styles.NavBar>
    )

};

export default NavBar;