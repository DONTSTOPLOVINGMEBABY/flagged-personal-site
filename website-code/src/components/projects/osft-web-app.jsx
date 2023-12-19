import { 
    IndividualProject, 
    ProjectDetails,
    ProjectTitles, 
    ProjectMainTitle, 
    ProjectSubtitle,
    ProjectDescription, 
    BuiltWithIcons, 
    ProjectLink, 
    ProjectLinks, 
    ThinColumn, 
    BuiltWith, 
} from "../../styles/projects.styled"
import { useFlag, useFeature } from "feature-toggles-react-sdk"
import TechStackIcon from "./tech-stack-icon"
import ProjectVideoDemo from "./osft-video"
import express_svg from "../../assets/express.svg"
import javascript_svg from "../../assets/javascript.svg"
import mongodb_svg from "../../assets/mongodb.svg"
import nodejs_svg from "../../assets/nodejs.svg"
import react_svg from "../../assets/react.svg"
import redis_svg from "../../assets/redis.svg"


function OSFTWebApp () {

    const titleFlag = useFlag('osft-project-section.project-title')
    const descriptionFlag = useFlag('osft-project-section.description')
    const iconsFlag = useFlag('osft-project-section.icons')
    const buttonsFlag = useFlag('osft-project-section.buttons')
    const demoVideoFlag = useFlag('osft-project-section.demo-video')
    const osftDemoFeature = useFeature('osft-project-section')
    
    return osftDemoFeature ? <IndividualProject>
            <ThinColumn>
                <ProjectDetails>
                    { titleFlag ? <ProjectTitles>
                        <ProjectMainTitle>
                            Open Source Feature Toggles (OSFT)
                        </ProjectMainTitle>
                        <ProjectSubtitle>
                            Full Stack Web App
                        </ProjectSubtitle>
                    </ProjectTitles> : null } 
                    { descriptionFlag ? <ProjectDescription>
                            OSFT is an open source feature flagging service that allows developers to embed highly performant and scalable feature toggles directly into their Javascript and React Applications. 
                    </ProjectDescription> : null } 
                    { iconsFlag ? 
                    <> 
                        <BuiltWith>
                            Built With
                        </BuiltWith>
                        <BuiltWithIcons>
                            <TechStackIcon icon={mongodb_svg} name="MongoDB"/>
                            <TechStackIcon icon={redis_svg} name="Redis"/>
                            <TechStackIcon icon={nodejs_svg} name="NodeJS"/>
                            <TechStackIcon icon={express_svg} name="ExpressJS"/>
                            <TechStackIcon icon={react_svg} name="React"/>
                            <TechStackIcon icon={javascript_svg} name="JavaScript"/>
                        </BuiltWithIcons>
                    </> : null } 
                    { buttonsFlag ? <ProjectLinks>
                        <ProjectLink target="_blank" href="https://opensourcefeaturetoggles.com/home">Use OSFT</ProjectLink>
                        <ProjectLink target="_blank" href="https://github.com/DONTSTOPLOVINGMEBABY/OSFT-Web-Application">View Source Code</ProjectLink>
                    </ProjectLinks> : null } 
                </ProjectDetails>
            </ThinColumn>
            { demoVideoFlag ? <ProjectVideoDemo 
            watch_url="https://hjacobs-rest-api-production.up.railway.app/osft/raw-video-example"
            /> : null } 
        </IndividualProject> : null 
}

export default OSFTWebApp