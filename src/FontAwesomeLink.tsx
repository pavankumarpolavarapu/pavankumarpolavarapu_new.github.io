import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitterSquare, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);

type Props = {
    icon: IconProp,
    url: string,
};

const FontAwesomeLink: React.FC<Props> = ({
    icon,
    url,
}) => {
    const [over, setOver] = useState(false);

    return (
        <button onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
            onClick={() => window.open(url, '_blank')} >
            <FontAwesomeIcon icon={icon} style={over ? { color: "blue" } : {}} size="lg" />
        </button>
    );
}

export default FontAwesomeLink;