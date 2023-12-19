import styled from "styled-components"

const HeaderStyled = styled.header`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    @media (max-width: 700px) {
        justify-content: space-around;
    }
`

const Name = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 8px;
    font-family: 'Poppins';
    font-weight: 400;
`

const NavBar = styled.nav`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: fit-content;
`

const NavItem = styled.a`
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    margin: 12px;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
`

const NavLink = styled.a`
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    margin: 6px;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
`


export { 
    HeaderStyled, 
    Name,  
    NavBar, 
    NavItem, 
    NavLink, 
}