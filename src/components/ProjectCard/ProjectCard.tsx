import React from 'react';
import styled from 'styled-components';
import defaultImage from './ProjectCardDefaultImage.jpg';

type ProjectCardProps = {
    title: string
}

const DivBackground = styled.div`
    border: 1px solid #000;
    background-image: url(${ defaultImage});
`;

const clickButton = () => {
    console.log('toto b');
}

function ProjectCard({ title }: ProjectCardProps) {
    return (<DivBackground>
        <div>Text</div>

        <div>
            {title} </div>


        <div><button onClick={clickButton}>Clic</button></div>


    </DivBackground >);
}

export default ProjectCard;