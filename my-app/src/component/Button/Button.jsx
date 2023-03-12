import React from "react";
import './Button.css';
export const Button = ({ children, onClick, variant, filter }) => {
    return (
        <button
            className={`w-24 h-10 shadow-2xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700
            rounded-full focus:outline-none focus:ring focus:ring-violet-300 
            cursor-pointer ${variant} ${filter}`}
            onClick={onClick}>
            {children}
        </button>
    )
}