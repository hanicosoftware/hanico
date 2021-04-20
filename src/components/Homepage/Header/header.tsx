import React from 'react';
import { SiteHeader,SiteHeaderSection,Title, About, Apps, Contact } from "./styles";
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <SiteHeader>
        <SiteHeaderSection>
            <Link to="/">
                <Title>HA.NI.CO</Title> 
             </Link>
        </SiteHeaderSection>

        <SiteHeaderSection>
            <About>About</About> 
            <Apps>Apps</Apps>
        </SiteHeaderSection>
  
        <SiteHeaderSection>
            {/* If we can add something that put space equal between the buttons.  */}
           
            <Contact>Contact</Contact>
        </SiteHeaderSection>
        
    </SiteHeader>

    )
}

export default Header;
