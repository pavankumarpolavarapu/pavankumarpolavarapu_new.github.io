import React, { useState } from 'react';

const DarkMode: React.FC = () =>  {
    const [mode, setMode] = useState(Boolean(localStorage.getItem("mode") == "true"));
    
    if (mode == true) {
        document.body.classList.add("dark-theme");
    }

    const onToggle = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setMode(ev.target.checked);
        localStorage.setItem("mode", String(ev.target.checked));
        document.body.classList.toggle("dark-theme");
    };

    return (
        <label className="switch">
            <input id="toggle-button" type="checkbox" onChange={onToggle} checked={mode}></input>
            <span className="slider round"></span>
        </label>
    );
}

export default DarkMode;