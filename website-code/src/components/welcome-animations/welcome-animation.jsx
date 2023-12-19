import { useEffect, useState } from "react"
import { 
    WelcomeAnimationStyled,  
    MessageWrapper
} from "../../styles/welcomeAnimation"
import messages from "../../utils/messages"
import Animation from "./animation"
import { AnimatePresence } from "framer-motion"
import ScrollDown from "./scroll-down"

function WelcomeAnimation () {
    
    const [messageCounter, setMessageCounter] = useState(0)
    const [currentMessage, setCurrentMessage] = useState(0)
    const [key, setKey] = useState(0)

    useEffect(() => {
        const num_messages = messages.length
        const interval = setInterval(() => {
            setMessageCounter(messageCounter + 1)
            setCurrentMessage((messageCounter + 1) % num_messages)
            setKey(key + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [messageCounter])


    return (
        <WelcomeAnimationStyled>
            <MessageWrapper>
                <AnimatePresence>
                    <Animation message={messages[currentMessage]} key={key}/>
                </AnimatePresence>
            </MessageWrapper>
            <ScrollDown />
        </WelcomeAnimationStyled>
    )
}

export default WelcomeAnimation