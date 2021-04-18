import AspectRatio from 'react-aspect-ratio'; 
import React, { useState } from 'react';

import { ButtonFace, ButtonPile, DivBackground }  from './styles';

type ProjectCardProps = {
    title: string
}

enum Face {
    Pile,
    Face
}

const toggleFace = (x: Face) => {
    return (x === Face.Pile) ? Face.Face : Face.Pile
}

function ProjectCard({ title }: ProjectCardProps) {
    const [face, setFace] = useState(Face.Face)
    return (
      
            <DivBackground>

                

                <div style={{ width: '100%', display: 'flex' }}>

                    <div style={{ width: '50%' }}>
                        {title}
                    </div>

                    <div style={{ width: '50%' }}>
                        
                        {face === Face.Face
                            ? <ButtonFace onClick={() => setFace(toggleFace(face))} />
                            : <ButtonPile onClick={() => setFace(toggleFace(face))} />
                        }
                    </div>

                </div>
            </DivBackground>

    );
}
//{(face === Face.Face) ? 'Clic' : 'Clac'}
export default ProjectCard;
/*
<AspectRatio ratio="0.5" style={{  maxWidth: '400px', backgroundImage: 'url("./ProjectCardDefaultImage.jpg")' }}>
*/