import AspectRatio from 'react-aspect-ratio'; 
import React, { useState } from 'react';

import { DivBackground, }  from './styles';

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
    const [face, setFace] = useState(Face.Face);
    return (
      
            <DivBackground>

                

                <div style={{ width: '100%', display: 'flex' }}>

                    <div style={{ width: '50%' }}>
                    {title}
                    </div>

                    <div style={{ width: '50%' }}>
                        <button onClick={() => setFace(toggleFace(face))}>
                            {(face === Face.Face) ? 'Clic' : 'Clac'}
                            <img src = "" />
                            </button>
                    </div>

                </div>
            </DivBackground>

      );
}

export default ProjectCard;
/*
<AspectRatio ratio="0.5" style={{  maxWidth: '400px', backgroundImage: 'url("./ProjectCardDefaultImage.jpg")' }}>
*/