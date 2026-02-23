import React from 'react';

const ImageDisplay: React.FC<{ src: string; alt: string; }> = ({ src, alt }) => {
    return (
        <div>
            <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
};

export default ImageDisplay;