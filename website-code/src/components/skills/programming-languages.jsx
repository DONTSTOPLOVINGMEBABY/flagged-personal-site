import { 
    CategorySkills, 
    CategoryTitle, 
    SkillCategory, 
    SkillRow
} 

from "../../styles/skills.styled"
import SingleSkill from "./singleSkill"
import python_svg from '../../assets/python.svg'
import racket_svg from '../../assets/racket.svg'
import bash_svg from '../../assets/bash.svg'
import c_svg from '../../assets/c.svg'
import typescript_svg from '../../assets/typescript.svg'
import golang_svg from '../../assets/go.svg'
import java_svg from '../../assets/java2.svg'

function ProgrammingLanguages () {

    return (
        <SkillCategory>
            <CategoryTitle>Programming Languages</CategoryTitle>
            <CategorySkills>
                <SkillRow>
                    <SingleSkill
                    icon={bash_svg}
                    name="Bash"
                    />
                    <SingleSkill 
                    icon={python_svg}
                    name="Python"
                    />
                </SkillRow>
                <SkillRow>
                        <SingleSkill
                        icon={java_svg}
                        name="Java"
                        /> 
                        <SingleSkill
                        icon={typescript_svg}
                        name="TypeScript"
                        />
                        <SingleSkill
                        icon={golang_svg}
                        name="Golang"
                        />
                </SkillRow>
                <SkillRow>
                    <SingleSkill
                    icon={racket_svg}
                    name="Racket"
                    />
                    <SingleSkill
                    icon={c_svg}
                    name="C"
                    />
                </SkillRow>
            </CategorySkills>
        </SkillCategory>    
    )
}

export default ProgrammingLanguages