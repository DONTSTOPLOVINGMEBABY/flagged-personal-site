import styled from "styled-components"

const ContactSectionStyled = styled.section`
    width: 100%;
    height: fit-content ; 
    padding: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column ; 
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
`

const ContactInformation = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${ props => props.$margin ? props.$margin : '20px 0px' };
    justify-content: center;
    align-items: center;
`

const Prompt = styled.span`
    font-size: 1.2rem;
    height: fit-content;
    @media (max-width: 550px) {
        font-size: 1rem;
    }
`

const Email = styled.span`
    font-weight: 700;
    height: fit-content;
    font-size: 2rem;
    @media (max-width: 550px) {
        font-size: 1.5rem;
    }
`   

const Or = styled.span`
    color: #999999;
    font-size: 1.25rem;
    margin-top: 40px;
    margin-bottom: 40px;
    letter-spacing: 4px;
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
`

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: fit-content;
    text-decoration: none;
`

const LinkIcon = styled.img`
    height: 50px ; 
    width: 50px;
    margin-right: ${ props => props.$right ? props.$right : '0px' };
`


export {
    ContactSectionStyled,
    ContactInformation, 
    Section,
    Prompt,  
    Email, 
    Or, 
    SocialLinks,
    Link, 
    LinkIcon,  
}