import { AppPageStyled } from './styles/app.styled'
import Header from './components/header'
import WelcomeAnimation from './components/welcome-animations/welcome-animation'
import AboutSection from './components/about'
import { LandingPage } from './styles/app.styled'
import ProjectSection from './components/projects/project'
import SkillsSection from './components/skills/skills'
import ContactSection from './components/contact/contact'
import Footer from './components/footer/footer'
import { useFeature } from "feature-toggles-react-sdk"


function App() {
  
  const about = useFeature('about')
  const projects = useFeature('whole-project-section')
  const introduction = useFeature('introduction')
  const skills = useFeature('skills-section')
  const contact = useFeature('contact')
  const footer = useFeature('footer')
  const killSwitch = useFeature('kill-switch')

  return !killSwitch ? <AppPageStyled>
        { introduction ? <LandingPage>
          <Header/>
          <WelcomeAnimation />
        </LandingPage> : null }
        { about ? <AboutSection /> : null } 
        {/* { projects ? <ProjectSection/> : null }  */}
        <ProjectSection />
        { skills ? <SkillsSection /> : null }
        { contact ? <ContactSection /> : null }
        { footer ?  <Footer /> : null } 
      </AppPageStyled> : null 
}

export default App
