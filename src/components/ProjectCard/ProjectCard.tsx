import React from 'react';
import { DivBackground} from './styles';


type ProjectCardProps = {
    title: string
}


const clickButton = () => {
    console.log('toto b');
}

function ProjectCard({ title }: ProjectCardProps) {
    return (
    
    <DivBackground>
        <div>Text</div>

        <div>{title} </div>


        <div><button onClick={clickButton}>Clic</button></div>


    </DivBackground>);
}

export default ProjectCard;