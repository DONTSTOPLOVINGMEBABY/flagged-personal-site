import styled from "styled-components"

const FooterStyled = styled.footer`
    width: 100%;
    height: 120px ; 
    padding: 20px 20px 0px 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
`

const FooterMessage = styled.span`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    FooterStyled,
    FooterMessage,
}