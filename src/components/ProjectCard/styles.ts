import styled from "styled-components";
import defaultImage from './ProjectCardDefaultImage.jpg';

import buttonFaceImage from './buttonFace.png';
import buttonPileImage from './buttonPile.png';

export const DivBackground = styled.div`
    border: 1px solid #000;
    min-height: 100px;
    min-width: 130px;
`;

export const ButtonFace = styled.button`
    background-image: url(${buttonFaceImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 40px;
    min-width: 40px;
`;

export const ButtonPile = styled.button`
    background-image: url(${buttonPileImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 40px;
    min-width: 40px;
`;


//background-image: url(${ defaultImage});
