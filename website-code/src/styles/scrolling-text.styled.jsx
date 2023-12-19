import styled, { css, keyframes } from "styled-components"

const scrollTextAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollTextToLeft = css`
  animation: ${scrollTextAnim} 14s linear infinite;
`;

const scrollTextToRight = css`
  animation: ${scrollTextAnim} 14s linear infinite reverse;
`;

const ScrollingTextStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden; 
    margin-top: 30px;
    position: relative;
    color: white;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        background-image: linear-gradient(to right, rgb(27, 27, 27), transparent);
        height: 100%;
        width: 40px;

        z-index: 10;
    }


    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;

        background-image: linear-gradient(to left, rgb(27, 27, 27), transparent);
        height: 100%;
        width: 40px;

        z-index: 10;
    }

    span {
        word-spacing: 14px;
        filter: brightness(1.5);
        font-size: 24px;
        font-family: 'Lora';
        white-space: nowrap;
        ${props => props.direction === 'toLeft' && scrollTextToLeft} ; 
        ${props => props.direction === 'toRight' && scrollTextToRight} ; 
    }
`

export default ScrollingTextStyled