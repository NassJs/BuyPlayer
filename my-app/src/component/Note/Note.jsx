import React from 'react';
import './Note.css';

export const Note = ({children}) => {
    return (
        <div className="note">{children}</div>
    )
}