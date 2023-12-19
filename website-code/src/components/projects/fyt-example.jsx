import { 
    BuiltWithIcons,
    IndividualProject, 
    ProjectDescription, 
    ProjectDetails,
    ProjectLink,
    ProjectLinks,
    ProjectMainTitle,
    ProjectSubtitle,
    ProjectTitles, 
    ThinColumn, 
} from "../../styles/projects.styled";
import { useFlag, useFeature } from "feature-toggles-react-sdk"
import ProjectVideoDemo from "./osft-video";
import TechStackIcon from "./tech-stack-icon";
import firebase_svg from '../../assets/firebase.svg'
import javascript_svg from "../../assets/javascript.svg"
import react_svg from "../../assets/react.svg"

function FYTExample () {

    const titleFlag = useFlag('fyt.title')
    const descriptionFlag = useFlag('fyt.description')
    const buttonsFlag = useFlag('fyt.buttons')
    const iconsFlag = useFlag('fyt.icons')
    const demoVideoFlag = useFlag('fyt.demo-video')
    const fytFeatureFlag = useFeature('fyt')

    return fytFeatureFlag ? <IndividualProject $margintop='30px'>
            <ThinColumn>
                <ProjectDetails>
                    { titleFlag ? <ProjectTitles>
                        <ProjectMainTitle>
                            React YouTube Clone
                        </ProjectMainTitle>
                        <ProjectSubtitle>
                            A React + Firebase Project
                        </ProjectSubtitle>
                    </ProjectTitles> : null } 
                    { descriptionFlag ?  <ProjectDescription>
                        This React YouTube clone (dubbed Fake-YouTube) uses Cloud Firestore, Firebase storage, and React to grant users much of the same functionality they can get on actual YouTube including sharing videos, subscribing to channels, and interacting with user generated content via likes and comments. 
                    </ProjectDescription> : null } 
                    { iconsFlag ? <>
                        <ProjectSubtitle>
                            Built With
                        </ProjectSubtitle>
                        <BuiltWithIcons>
                            <TechStackIcon icon={firebase_svg} name="Firebase"/>
                            <TechStackIcon icon={javascript_svg} name="Javascript"/>
                            <TechStackIcon icon={react_svg} name="React"/>
                        </BuiltWithIcons>
                    </> : null }
                    { buttonsFlag ? <ProjectLinks>
                        <ProjectLink target="_blank" href="https://henryjacobs.us/React-YouTube-Clone/">Surf Fake-YouTube</ProjectLink>
                        <ProjectLink target="_blank" href="https://github.com/DONTSTOPLOVINGMEBABY/React-YouTube-Clone">View Source Code</ProjectLink>
                    </ProjectLinks> : null } 
                </ProjectDetails>
            </ThinColumn>
            { demoVideoFlag ?  <ProjectVideoDemo
            watch_url="https://hjacobs-rest-api-production.up.railway.app/fyt/demo"
            /> : null } 
        </IndividualProject>
    : null 
}

export default FYTExample

/* 
Successfully designed and built a fully functional YouTube clone using
React, Firestore, and Firebase storage.
Implemented functionality that allows users to create and register
accounts, upload and watch content, interact with content through likes
and comments, and search for specific videos/channels

*/