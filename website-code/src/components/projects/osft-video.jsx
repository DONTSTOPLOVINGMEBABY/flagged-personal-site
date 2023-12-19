import { 
    VideoDemoStyled,
    VideoDemo, 
} from "../../styles/projects.styled"

function ProjectVideoDemo ({
    watch_url, 
}) {
    return (
        <VideoDemoStyled>
                <VideoDemo muted controls loop autoPlay>
                    <source src={watch_url} type="video/mp4"/>
                </VideoDemo>
        </VideoDemoStyled>
    )
}

export default ProjectVideoDemo