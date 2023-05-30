import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #051A6A;
    align-items: center;
`
export const NavBarOption = styled(Link)`
    color: white;
    margin: 0px 10px 0px 10px;
    text-decoration: none;
    
    ${(props) =>
        props.id === 'logout' &&
        css`
        margin-left: auto;
    `}
`
export const Image = styled.img`
    width: 10%;
`