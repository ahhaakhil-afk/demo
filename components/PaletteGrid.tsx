// PaletteGrid.tsx
import React from 'react';
import './PaletteGrid.css';

const PaletteGrid: React.FC = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Example colors
    return (
        <div className="palette-grid">
            {colors.map((color, index) => (
                <div key={index} className="color-box" style={{ backgroundColor: color }}>
                    {color}
                </div>
            ))}
        </div>
    );
};

export default PaletteGrid;
