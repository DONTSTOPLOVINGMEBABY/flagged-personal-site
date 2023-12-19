import { 
    ProjectSectionStyled, 
} from "../../styles/projects.styled"
import SectionSplitter from "../section-splitter"
import OSFTWebApp from "./osft-web-app"
import OSFTReactSDK from "./osft-react-sdk"
import FYTExample from "./fyt-example"

function ProjectSection () {
    return (
        <ProjectSectionStyled id="projects">
            <SectionSplitter name="Projects" side="left" />
            <OSFTWebApp />
            <OSFTReactSDK /> 
            <FYTExample />
        </ProjectSectionStyled>
    )
}

export default ProjectSection