import styled from "styled-components"


const AboutPageStyled = styled.section`
    width: 100%;
    height: fit-content ; 
    padding: 20px 20px 0px 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column ; 
    color: #ffffff;
`

const AboutInfo = styled.div`
    padding: 20px 0;
    width: 100%;
    flex: 1;
    display: flex;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`

const WrapPhoto = styled.div`
    width: 50%;
    margin-right: 30px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    @media (max-width: 850px) {
        width: 100%;
        justify-content: center;
    }
`

const PhotoOfMe = styled.img`
    width: 100%;
    max-height: 500px;
    border-radius: 20px;
    object-fit: contain;
    @media (max-width: 850px) {
        margin-bottom: 20px;
    }
`

const DescribeMyself = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 850px){
        width: 100%;
        justify-content: center;
    }

`

const Bio = styled.article`
    line-height: 2rem;
    flex: 1;
    text-align: left;
    color: #999999;
    font-size: 1rem;
    font-family: 'Poppins';
    @media (max-width: 850px) {
        text-align: center;
    }
`

const ScrollerContainer = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Lora';
    font-weight: 700;

    h3 {
        font-family: 'Lora';
        font-size: 1.75rem;
        font-weight: 400;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 0px;
    }

`


export {
    AboutPageStyled,
    WrapPhoto, 
    PhotoOfMe,  
    AboutInfo, 
    Bio, 
    ScrollerContainer, 
    DescribeMyself, 
}