import styled from "styled-components"

const ProjectSectionStyled = styled.section`
    width: 100%;
    height: fit-content;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
`

const IndividualProject = styled.div`
    height: fit-content;
    display: flex;
    margin-top: ${props => props.$margintop ? props.$margintop : '20px' } ;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`

const VideoDemoStyled = styled.div`
    width: 50%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        width: 100%;
    }
    /* padding-left: 12px; */
        
    /* border-radius: 10px; */
`

const VideoDemo = styled.video`
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 45px 65px 0px rgba(0,0,0,1),
    0px 35px 22px 0px rgba(0,0,0,0.16);
    @media (max-width: 850px) {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`

const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: space-around;
    @media (max-width: 850px) {
        width: 100%;
    }
`

const ThinColumn = styled.div`
    width: 50%;
    display: flex;
    @media (max-width: 850px) {
        width: 100%;
    }
`


const ProjectTitles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    color: inherit;
    text-decoration: none;
`

const ProjectMainTitle = styled.h2`
    font-size: 1.5rem;
    color: inherit;
    margin-bottom: 4px;
    font-family: 'Poppins';
    margin-top: 0px;
`

const ProjectSubtitle = styled.h3`
    font-size: 1rem;
    color: inherit;
    margin-top: 4px;
    margin-bottom: 0px;
    text-decoration: none;
    font-family: 'Poppins';
    font-weight: 600;
    z-index: 10;
`

const BuiltWith = styled.h3`
    font-size: 1rem;
    color: inherit;
    margin-top: 4px;
    margin-bottom: 0px;
    text-decoration: none;
    font-family: 'Poppins';
    font-weight: 400;
`


const ProjectDescription = styled.div`
    font-size: 1rem;
    line-height: 2rem;
    width: 100%;
    text-align: left;
    color: #999999;
    margin: 30px 0px;
`

const BuiltWithIcons = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px 0px;
`

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IndividualIcon = styled.img`
    height: 40px;
    width: 40px;
    &:hover {
        transform: scale(1.05);
    }
    @media (min-width: 1050px) and (max-width: 1250px) {
       height: 30px;
       width: 30px;
    }
    @media (min-width: 851px) and (max-width: 1049px) {
       height: 25px;
       width: 25px;
    }
`

const IconName = styled.span`   
    margin-top: 4px;
    font-family: 'Poppins';
    @media (min-width: 1050px) and (max-width: 1250px) {
       font-size: smaller;
    }
    @media (min-width: 851px) and (max-width: 1049px) {
       font-size: 12px;
    }
`

const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 18px;
`

const ProjectLink = styled.a`
    height: 40px;
    width: 175px;
    border: 2px white solid;
    color: #ffffff;
    text-decoration: none ;  
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: .25s ease-in;
    transition-property: background-color color border;

    &:hover { 
        background-color: white;
        color: #1B1B1B;
        border: 2px white #1B1B1B;
    }
`

const CodeExampleStyled = styled.div`
    width: 50%;
    padding-left: 12px;
    align-items: center;
    display: flex;
    @media (max-width: 850px) {
        width: 100%;
        padding: 0px;
        margin-top: 30px;
        justify-content: center;
    }
`

const CodeExamplePicture = styled.img`
    width: 80%;
    height: fit-content;
    overflow: hidden;
    box-shadow: 0px 45px 65px 0px rgba(0,0,0,1),
    0px 35px 22px 0px rgba(0,0,0,0.16);
`



export { 
    ProjectSectionStyled,
    IndividualProject,
    VideoDemoStyled, 
    VideoDemo, 
    ProjectDetails, 
    ProjectTitles, 
    ProjectMainTitle, 
    ProjectSubtitle, 
    ProjectDescription, 
    BuiltWithIcons, 
    IconBox, 
    IndividualIcon, 
    IconName, 
    ProjectLinks, 
    ProjectLink, 
    CodeExampleStyled, 
    CodeExamplePicture, 
    ThinColumn,
    BuiltWith, 
} 