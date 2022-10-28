import styled, {keyframes} from "styled-components";

const animationImgHome = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }

`
const animationTextHome = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }

`

const animationButton = keyframes`
    0%{
        transform: translateY(100px);
        opacity: 0;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }

`

export const ImgHome = styled.div `
    animation: ${animationImgHome} .8s ;
    display: flex;

`

export const TextHome = styled.div`
    animation: ${animationTextHome} .8s ;

`
export const ButtonHome = styled.div `
    animation: ${animationButton} .8s;
`