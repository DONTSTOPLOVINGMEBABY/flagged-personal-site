import { SkillEntry, SkillIcon, SkillTitle } from "../../styles/skills.styled";

function SingleSkill ({
    icon, 
    name, 
    $width
}) {
    return (
        <SkillEntry $width={$width}>
            <SkillIcon src={icon} alt={name} />
            <SkillTitle>{name}</SkillTitle>
        </SkillEntry>
    )
}

export default SingleSkill