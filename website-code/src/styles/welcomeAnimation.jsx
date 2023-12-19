import styled, { keyframes } from "styled-components"

const WelcomeAnimationStyled = styled.section`
    width: 100%;
    height: calc(100% - 56px); 
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    color: #ffffff;
`

const MessageWrapper = styled.div`
    height: 300px;
    width: 100%;
    position: relative;
    overflow: hidden;
    font-family: 'Noto Sans';
`

const CenterMessage = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;
    width: 100%;
    font-size: 5rem;
    color: #ffffff;
`

const ScrollDownStyled = styled.div`
    position: absolute;
    bottom: 80px;
    cursor: pointer;

    @media (max-width: 500px) {
        bottom: 145px;
    }

`

const ScrollDownContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1.5rem;
    position: relative ; 
`

const moveChevron = keyframes`
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY(2.4rem);
  }
  66.6% {
    opacity: 1;
    transform: translateY(3.12rem);
  }
  100% {
    opacity: 0;
    transform: translateY(4.8rem) scale(0.5);
  }
`;


const Chevron = styled.div`
    position: absolute;
    width: 1.05rem;
    height: 0.24rem;
    opacity: 0;
    transform: scale(0.3);
    animation: ${moveChevron} 3s ease-out infinite;
    color: #ffffff;

    &:first-child {
        animation: ${moveChevron} 3s ease-out 1s infinite;
    }

    &:nth-child(2) {
        animation: ${moveChevron} 3s ease-out 2s infinite;
    }

    &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #ffffff ; 
    }

    &:before {
        left: 0;
        transform: skewY(30deg);
    }

    &:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
    }
`

export {
    WelcomeAnimationStyled,
    MessageWrapper,
    CenterMessage, 
    ScrollDownStyled, 
    ScrollDownContainer, 
    Chevron, 
}