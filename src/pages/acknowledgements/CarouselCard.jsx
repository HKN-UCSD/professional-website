import React, { useState } from 'react';

function CarouselCard({ img, title, content }) {
    return (
        <div className="flex p-6 w-full max-w-4xl mx-auto" style={{background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', border: '1px solid rgba(163, 215, 229, 0.2)'}}>
            <img className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0" src={img} alt={title}/>
            <div className="card-content">
                <h5 className="font-bold mb-4 text-heading">{title}</h5>
                <p className="mb-6 text-body">{content}</p>
            </div>
        </div>
    );
}

export default CarouselCard;