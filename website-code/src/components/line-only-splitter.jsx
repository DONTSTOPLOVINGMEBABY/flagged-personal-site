import { 
    FullSectionSplitterStyled,
    LineFiller,  
} from "../styles/fullSectionSplitter.styled";

function LineOnlySplitter ({
    $margintop
}) {
    return (
        <FullSectionSplitterStyled $margintop={$margintop}>
            <LineFiller/>
        </FullSectionSplitterStyled>
    )
}

export default LineOnlySplitter