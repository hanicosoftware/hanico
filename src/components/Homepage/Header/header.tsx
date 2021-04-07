import React from 'react';
import { SiteHeader,SiteHeaderSection,Title, About, Apps, Contact } from "./styles";


const Header = () => {

    return (
        <SiteHeader>
        <SiteHeaderSection>
        <Title>HA.NI.CO</Title> 
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
