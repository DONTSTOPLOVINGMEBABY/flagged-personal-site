import styled from "styled-components"

const SectionSplitterStyled = styled.header`
    display: flex;
    width: 100%;
    height: fit-content;
    font-family: 'Poppins';
    margin-top: ${props => props.$margintop ? props.$margintop : '0px' } ;
`

const BlankFiller = styled.div`
    width: 50%;

    @media (max-width : 850px) {
        display: none;
    }

`

const NameSection = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width : 850px) {
        width: 100%;
    }
`

const Name = styled.div`
    width: fit-content;
    margin-right: 20px;
    font-size: 2rem;
`

const Line = styled.div`
    flex: 1;
    height: 1px;
    background-color: white;
`


export {
    SectionSplitterStyled, 
    BlankFiller, 
    NameSection,
    Name, 
    Line, 
}