import React from 'react';
import logoImage from '../Logo.jpg';

function Logo({ width = '40px', height = '40px' }) {
    return (
        <div>
            <img src={logoImage} alt="Logo" style={{ width, height }} />
        </div>
    );
}

export default Logo;
