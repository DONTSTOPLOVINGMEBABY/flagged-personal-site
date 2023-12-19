import { 
    IconBox, 
    IndividualIcon, 
    IconName,  
} from "../../styles/projects.styled"

function TechStackIcon ({
    name, 
    icon
}) {
    return (
        <IconBox>
            <IndividualIcon src={icon} alt={name}/>
            <IconName>{name}</IconName>
        </IconBox>
    )
}

export default TechStackIcon