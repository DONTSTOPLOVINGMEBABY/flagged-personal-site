import { 
    HeaderStyled, 
    Name, 
    NavBar, 
    NavItem, 
    NavLink, 
} from "../styles/header.styled"
import useWindowSize from '../hooks/useWindowSize'

function Header () {

    const screenSize = useWindowSize()

    return ( 
        screenSize.width > 700 ? <HeaderStyled>
            <Name>Henry Jacobs</Name>
            <NavBar>
                <NavItem href="#about">ABOUT</NavItem>
                <NavItem href="#projects">PROJECTS</NavItem>
                <NavItem href="#contact">CONTACT</NavItem>
                {/* <NavItem href="https://hjacobs-rest-api-production.up.railway.app/henryjacobs/resume" target="_blank">RESUME</NavItem> */}
            </NavBar>
        </HeaderStyled> 
        : <HeaderStyled> 
            <Name>Henry Jacobs</Name>
            <NavBar>
                <NavItem href="https://hjacobs-rest-api-production.up.railway.app/henryjacobs/resume" target="_blank">RESUME</NavItem>
            </NavBar>
        </HeaderStyled>
    )  
}

export default Header