import styled from "styled-components"

const FullSectionSplitterStyled = styled.header`
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    margin-top: ${props => props.$margintop ? props.$margintop : '0px' } ;
    z-index: 10;
`

const LineFiller = styled.div`
    flex: 1;
    height: 1px;
    background-color: white;
`

const NameSection = styled.h2`
    width: fit-content;
    margin: 0px;
    padding: 0 30px;
`

export {
    FullSectionSplitterStyled, 
    LineFiller,
    NameSection, 
}