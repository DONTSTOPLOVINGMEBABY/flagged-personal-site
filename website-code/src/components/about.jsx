import { 
    AboutPageStyled, 
    PhotoOfMe, 
    WrapPhoto, 
    AboutInfo, 
    Bio, 
    ScrollerContainer,
    DescribeMyself,  
} from "../styles/about.styled"
import SectionSplitter from "./section-splitter"
import ScrollingText from "./scroll-text"

function AboutSection () {
    return (
        <AboutPageStyled id="about">
            <SectionSplitter name="About" side="right" />
            <AboutInfo>
                <WrapPhoto>
                    <PhotoOfMe src="https://hjacobs-rest-api-production.up.railway.app/henryjacobs/me" alt="me!"/>
                </WrapPhoto>
                <DescribeMyself>
                    <Bio>
                        My name is Henry Jacobs and I am a Full Stack Developer who is passionate about computers and the positive impacts they can bring to people's lives. I first started programming at University in 2019 and have been exploring the ins and outs of web development since 2022 with my work on The Odin Project. I'm totally enthralled by computers and learning as much as I possibly can about them from the physical representation of bits to arranging pixels on the screen with HTML and CSS.
                    </Bio>
                    <ScrollerContainer>
                        <h3>Interests</h3>
                        <ScrollingText
                        text="Computer Science &middot;"
                        direction="toLeft"
                        />
                        <ScrollingText
                        text="Finance & Global Economics &middot;"
                        direction="toRight"
                        />
                        <ScrollingText
                        text="Mathematics &middot;"
                        direction="toLeft"
                        />
                        <ScrollingText
                        text="Reading &middot;"
                        direction="toRight"
                        />
                    </ScrollerContainer> 
                </DescribeMyself>
            </AboutInfo>
        </AboutPageStyled>
    )
}

export default AboutSection