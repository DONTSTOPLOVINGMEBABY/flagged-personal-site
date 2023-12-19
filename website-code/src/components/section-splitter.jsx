import { 
    SectionSplitterStyled, 
    BlankFiller, 
    NameSection, 
    Name, 
    Line, 
} from "../styles/section-splitter.styled"


function SectionSplitter ({ name, side, $margintop }) {
    return (
        <SectionSplitterStyled $margintop={$margintop}>
            {side === 'left' ?
            <>
                <NameSection>
                    <Name>{name}</Name>
                    <Line />
                </NameSection>
                <BlankFiller/>

            </> :
            <> 
                <BlankFiller/>
                <NameSection>
                    <Name>{name}</Name>
                    <Line />
                </NameSection>
            </>
            }

            
        </SectionSplitterStyled>
    )
}

export default SectionSplitter