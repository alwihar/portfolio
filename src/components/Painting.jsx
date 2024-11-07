import React, { useRef, useState } from 'react';

const Painting = ({ imageSrc, altText, link }) => {
    const itemRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Generate random positioning and transformation variables with constraints
    const randomStyles = {
        '--left': `${10 + Math.random() * 80}%`,      // 10% to 90%
        '--top': `${10 + Math.random() * 80}%`,       // 10% to 90%
        '--rotate': `${Math.floor(Math.random() * 10) - 10}deg`, // -15deg to 15deg
        '--scale': `${1.1 + Math.random() * 0.4}`,    // 1 to 1.2
        '--duration': `${5 + Math.random() * 5}s`,    // 5s to 10s
    };

    return (
        <a href={link || '#'} className="painting__container" style={randomStyles} ref={itemRef}>
            {!isLoaded && <div className="painting__placeholder"></div>}
            <img
                src={imageSrc}
                alt={altText}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className="painting__image"
            />
        </a>
    );
};

export default Painting;
