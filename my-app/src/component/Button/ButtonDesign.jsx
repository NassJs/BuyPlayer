import React from 'react';
import './ButtonDesign.css';

export const ButtonDesign = ({ children, design }) => {
    return (
        <button className={`btn_design ${design}`}> {children} </button>
    )
}
