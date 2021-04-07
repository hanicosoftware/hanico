import styled from "styled-components";

export const About = styled.button`
width: 60px;
height: 30px;
border-radius: 40px;
cursor: pointer;
padding: 5px 15px 5px 10px;

background: transparent;
border: none !important;


&:focus {
    outline: none;
   background: #86EFEC;
   font-weight: bold;
}
`;

export const Apps = styled.button`
width: 60px;
height: 30px;
border-radius: 40px;
cursor: pointer;

padding: 5px 15px;
background: transparent;
border: none !important;
&:focus {
    outline: none;
   background: #86EFEC;
   font-weight: bold;
}
`;

export const Contact = styled.button`
width: 60px;
height: 30px;
font-size: bold 20px/27px;
border-radius: 40px;
background:white;
cursor: pointer;
margin-right:175px;
background: transparent;
border: none !important;
&:focus {
    outline: none;
   background: #86EFEC;
   font-weight: bold;
}
`;

export const SiteHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
background-color: white;
`;

export const SiteHeaderSection = styled.div`
display: flex;
align-items: center;
`;


export const Title = styled.div`
margin-left: 156px;
font-size: 24px;
`; 