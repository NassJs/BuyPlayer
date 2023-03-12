import React from 'react';
import './ButtonDesign.css';

export const ButtonDesign = ({ children, design, onClick, size }) => {
    return (
        <button className={`btn_design ${design} ${size}`} onClick={onClick}> {children} </button>
    )
}
