import React from "react";
import './Welcome.css';

export const Welcome = ({children, variantText}) => {
    return (
        <div className={`welcome ${variantText}`}>
            {children} 
        </div>
    )
}