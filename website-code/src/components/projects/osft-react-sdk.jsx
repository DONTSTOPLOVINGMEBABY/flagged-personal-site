import { 
    BuiltWithIcons,
    IndividualProject, 
    ProjectDescription, 
    ProjectDetails, 
    ProjectLink, 
    ProjectLinks, 
    ProjectSubtitle, 
    ThinColumn,
    BuiltWith, 
} from "../../styles/projects.styled";
import { useFlag, useFeature } from "feature-toggles-react-sdk"
import CodeExample from "./code-example";
import TechStackIcon from "./tech-stack-icon";
import react_svg from '../../assets/react.svg'
import npm_svg from '../../assets/npm.svg'
import vite_svg from '../../assets/vite.svg'
import babel_svg from '../../assets/babel.svg'
import typescript_svg from '../../assets/typescript.svg'

function OSFTReactSDK () {

    const descriptionFlag = useFlag('React-SDK.description')
    const titleFlag = useFlag('React-SDK.title')
    const iconsFlag = useFlag('React-SDK.Icons')
    const buttonsFlag = useFlag('React-SDK.buttons')
    const codeSnippetFlag = useFlag('React-SDK.code-snippet')
    const reactSDKFeature = useFeature('React-SDK')

    return reactSDKFeature ?  <IndividualProject>
            <ThinColumn>
                <ProjectDetails>
                    { titleFlag ? <ProjectSubtitle>
                        JS Client & React SDK 
                    </ProjectSubtitle> : null }
                    {   descriptionFlag ? <ProjectDescription>
                        OSFT offers both a Javascript client and a React SDK that developers can use to implement
                        feature toggles in their applications, both hosted on NPM. 
                    </ProjectDescription> : null } 
                    { iconsFlag ? 
                    <>
                        <BuiltWith>
                            Built With
                        </BuiltWith>
                        <BuiltWithIcons>
                            <TechStackIcon icon={typescript_svg} name='TypeScript' />
                            <TechStackIcon icon={react_svg} name='React'/>
                            <TechStackIcon icon={vite_svg} name='Vite'/>
                            <TechStackIcon icon={babel_svg} name='Babel'/>
                            <TechStackIcon icon={npm_svg} name='NPM'/>
                        </BuiltWithIcons> 
                    </>: null } 
                   { buttonsFlag ? <ProjectLinks>
                        <ProjectLink target="_blank" href="https://www.npmjs.com/package/osff-js-sdk">JS Client on NPM</ProjectLink>
                        <ProjectLink target="_blank" href="https://www.npmjs.com/package/feature-toggles-react-sdk">React SDK on NPM</ProjectLink>
                    </ProjectLinks> : null } 
                </ProjectDetails>
            </ThinColumn>
            { codeSnippetFlag ? <CodeExample/> : null } 
        </IndividualProject> : null
}

export default OSFTReactSDK