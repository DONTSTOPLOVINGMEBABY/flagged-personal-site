import { 
    FullSectionSplitterStyled, 
    LineFiller, 
    NameSection,  
} from "../styles/fullSectionSplitter.styled"

function FullSectionSplitter ({
    name, 
    $margintop
}) {
    return (
        <FullSectionSplitterStyled $margintop={$margintop}>
            <LineFiller />
            <NameSection>
                {name}
            </NameSection>
            <LineFiller/>
        </FullSectionSplitterStyled>
    )
}

export default FullSectionSplitter