import React, { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);



function App() {

  const [mode, setMode] = useState(Boolean(localStorage.getItem("mode") == "true"));
  const [linkedinOver, setLinkedinOver] = useState(false);
  const [githubOver, setGithubOver] = useState(false);
  const [twitterOver, setTwitterOver] = useState(false);

  const onToggle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMode(ev.target.checked);
    localStorage.setItem("mode", String(ev.target.checked));
    document.body.classList.toggle("dark-theme");
  };

  if (mode == true) {
    document.body.classList.add("dark-theme");
  }

  return (
    <div className="container">
      <label className="switch">
        <input id="toggle-button" type="checkbox" onChange={onToggle} checked={mode}></input>
        <span className="slider round"></span>
      </label>
      <div className="header">
        <h1>Pavan Kumar Polavarapu</h1>
        <h4>Personal Website & Blog</h4>
      </div>
      <div className="aboutme">
        <h3>About Me</h3>
        <p>
          Hi, My name is Pavan Kumar Polavarapu. I am a Software Developer/Engineer currently working for Walmart based out of Bentonville, USA. 
          You can find me on 
          &nbsp;
          <button onMouseOver={() => setLinkedinOver(true)} 
                  onMouseLeave={() => setLinkedinOver(false)} 
                  onClick={() => window.open('https://linkedin.com/in/pavankumarpolavarapu', '_blank')} >
            <FontAwesomeIcon icon={['fab', 'linkedin']} style={linkedinOver ? { color: "blue" } : {}} size="lg" />
          </button> , 
          &nbsp;
          <button onMouseOver={() => setGithubOver(true)} 
                  onMouseLeave={() => setGithubOver(false)} 
                  onClick={() => window.open('https://github.com/pavankumarpolavarapu', '_blank')} >
            <FontAwesomeIcon icon={['fab', 'github']} style={githubOver ? { color: "blue" } : {}} size="lg" />
          </button> &nbsp; or on 
          &nbsp;
          <button onMouseOver={() => setTwitterOver(true)} 
                  onMouseLeave={() => setTwitterOver(false)} 
                  onClick={() => window.open('https://twitter.com/pavankumarp1990', '_blank')} >
            <FontAwesomeIcon icon={['fab', 'twitter']} style={twitterOver ? { color: "blue" } : {}} size="lg" />
          </button> 

        </p>
      </div>
    </div>
  );
}

export default App;
