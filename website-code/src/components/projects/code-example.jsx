import { 
  CodeExampleStyled, 
  CodeExamplePicture, 
} from "../../styles/projects.styled";
import useWindowSize from "../../hooks/useWindowSize";
import react_sdk_svg from '../../assets/react-sdk-snippet.svg'
import small_react_sdk_svg from '../../assets/small-react-snippet.svg'


function CodeExample () {
    
  const windowSize = useWindowSize()

  return (
    windowSize > 600 ? 
      <CodeExampleStyled>
        <CodeExamplePicture src={react_sdk_svg} alt="React SDK Code Snippet"/>
      </CodeExampleStyled>
      :
      <CodeExampleStyled>
        <CodeExamplePicture src={small_react_sdk_svg} alt="React SDK Code Snippet"/>
      </CodeExampleStyled>
  )

}

export default CodeExample