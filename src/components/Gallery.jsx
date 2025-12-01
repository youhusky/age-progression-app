import React from 'react';

const Gallery = ({ images, loading }) => {
    const ages = [5, 15, 20];

    return (
        <div className="gallery-container">
            {ages.map((age) => (
                <div key={age} className="gallery-item">
                    <div className="image-frame">
                        {loading ? (
                            <div className="skeleton-loader"></div>
                        ) : images[age] ? (
                            (images[age].startsWith('Text response:') || images[age].startsWith('Error:')) ? (
                                <div className="text-response">
                                    {images[age]}
                                </div>
                            ) : (
                                <img src={images[age]} alt={`${age} years old`} />
                            )
                        ) : (
                            <div className="placeholder-slot">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>{age} Years</span>
                            </div>
                        )}
                    </div>
                    <div className="age-label">{age} Years Old</div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
