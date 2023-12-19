import { 
    CategorySkills, 
    CategoryTitle, 
    SkillCategory, 
    SkillRow, 
} from "../../styles/skills.styled";
import SingleSkill from "./singleSkill";
import mongoDB_svg from '../../assets/mongodb.svg'
import node_svg from '../../assets/nodejs.svg'
import express from '../../assets/express.svg'
import mysql_svg from '../../assets/my-sql.svg'
import react_svg from '../../assets/react.svg'
import redis_svg from '../../assets/redis.svg'
import socket_io from '../../assets/socketio.svg'
 

function FrameworksSection () {
    return (
        <SkillCategory>
            <CategoryTitle>Technologies</CategoryTitle>
            <CategorySkills>
                <SkillRow>
                    <SingleSkill
                    icon={mongoDB_svg}
                    name="MongoDB"
                    />
                    <SingleSkill
                    icon={mysql_svg}
                    name="MySQL"
                    />
                </SkillRow>
                <SkillRow>
                    <SingleSkill
                    icon={node_svg}
                    name="NodeJS"
                    />
                    <SingleSkill
                    icon={express}
                    name="ExpressJS"
                    />
                    <SingleSkill
                    icon={react_svg}
                    name="React"
                    />
                </SkillRow>
                <SkillRow>
                    <SingleSkill 
                    icon={redis_svg}
                    name="Redis"
                    />
                    <SingleSkill
                    icon={socket_io}
                    name="SocketIO"
                    />
                </SkillRow>
            </CategorySkills>
        </SkillCategory>
    )
}

export default FrameworksSection