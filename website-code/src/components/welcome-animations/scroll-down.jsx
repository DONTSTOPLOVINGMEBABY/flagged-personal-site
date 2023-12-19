import { 
    ScrollDownStyled,  
    ScrollDownContainer, 
    Chevron
} from "../../styles/welcomeAnimation"

function ScrollDown () {
    return (
        <ScrollDownStyled>
            <ScrollDownContainer>
                <Chevron></Chevron>
                <Chevron></Chevron>
                <Chevron></Chevron>
            </ScrollDownContainer>
        </ScrollDownStyled>
    )
}

export default ScrollDown