import React, { useState } from 'react';

function CarouselCard({ img, title, content }) {
    return (
        <div className="grid grid-cols-3 flex-wrap items-center p-6 mb-6" style={{background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', border: '1px solid rgba(163, 215, 229, 0.2)'}}>
            <img className="object-cover rounded max-h-64" src={img} alt={title}/>
            <div className="ps-6 flex flex-col col-span-2" style={{color: '#60A5FA'}}>
                <h5 className="font-bold mb-4 text-2xl">{title}</h5>
                <p className="mb-6 text-body">{content}</p>
            </div>
        </div>
    );
}

export default CarouselCard;