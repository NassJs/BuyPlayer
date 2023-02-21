import React from 'react';

export const Card= ({children}) => {
    return (
    <div className="card"> {children}</div>

    )
}
export const CardPicture = ({alt , src}) => {
    return (
        <img src={src} alt={alt} />
    )
}