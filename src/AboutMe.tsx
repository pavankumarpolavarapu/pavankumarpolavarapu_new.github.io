import React, { useState } from 'react';
import FontAwesomeLink from './FontAwesomeLink';


const AboutMe: React.FC = () => {

    return (
        <div className="aboutme">
            <h3>About Me</h3>
            <p>
                Hi, My name is Pavan Kumar Polavarapu. I am a Software Developer/Engineer currently working for Walmart based out of Bentonville, USA.
                You can find me on
                &nbsp;
                <FontAwesomeLink icon={['fab', 'linkedin']} url='https://linkedin.com/in/pavankumarpolavarapu' /> ,
                &nbsp;
                <FontAwesomeLink icon={['fab', 'github']} url='https://github.com/pavankumarpolavarapu' />
                &nbsp; or on &nbsp;
                <FontAwesomeLink icon={['fab', 'twitter']} url='https://twitter.com/pavankumarp1990' />
            </p>
        </div>
    );

}

export default AboutMe;