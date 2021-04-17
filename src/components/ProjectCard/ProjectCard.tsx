import AspectRatio from 'react-aspect-ratio'; 
import React from 'react';

import { DivBackground, }  from './styles';


type ProjectCardProps = {
    title: string
}

const clickButton = () => {
    console.log('toto b');
}


function ProjectCard({ title }: ProjectCardProps) {
    return (
      
            <DivBackground>
                <div>{title} </div>
                

                <div style={{ width: '100%', display: 'flex' }}>

                    <div style={{ width: '50%' }}>
                        TEXT en Bas
                    </div>

                    <div style={{ width: '50%' }}>
                        <button onClick={clickButton}>Clic</button>
                    </div>

                </div>
            </DivBackground>

      );
}

export default ProjectCard;
/*
<AspectRatio ratio="0.5" style={{  maxWidth: '400px', backgroundImage: 'url("./ProjectCardDefaultImage.jpg")' }}>
*/