import { 
    ContactSectionStyled,  
    ContactInformation, 
    Email,
    Prompt,
    Section,
    Or,
    SocialLinks, 
    Link, 
    LinkIcon, 
} from "../../styles/contact.styled";
import FullSectionSplitter from "../full-section-splitter";
import gh_cat_svg from '../../assets/gh-cat.svg'
import linkedin_svg from '../../assets/linkedin.svg'

function ContactSection () {
    return (
        <ContactSectionStyled id="contact">
            <FullSectionSplitter name="Contact"/>
            <ContactInformation>
                <Section>
                    <Prompt>Send me an email at</Prompt>
                    <Email>henryjacobscode@gmail.com</Email>
                </Section>
                <Or>OR</Or>
                <Section>
                    <Prompt>Connect with me on social media</Prompt>
                    <SocialLinks>
                        <Link href="https://github.com/DONTSTOPLOVINGMEBABY" target="_blank">
                            <LinkIcon $right="25px" src={gh_cat_svg} alt="GH-Cat"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/henry-jacobs/" target="_blank">
                            <LinkIcon src={linkedin_svg} alt="LinkedIn"/>
                        </Link>
                    </SocialLinks>
                </Section>
            </ContactInformation>
        </ContactSectionStyled>
    )
}

export default ContactSection