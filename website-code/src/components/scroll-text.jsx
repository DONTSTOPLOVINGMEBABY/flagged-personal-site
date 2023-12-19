import ScrollingTextStyled from "../styles/scrolling-text.styled"


function ScrollingText({ text, direction }) {
    return (
        <ScrollingTextStyled direction={direction}>
            <span>
                {Array(12).fill(text).join(' ')}
            </span>
        </ScrollingTextStyled>
    )
}


export default ScrollingText