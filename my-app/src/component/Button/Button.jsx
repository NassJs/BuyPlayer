import React from "react";

export const Button = ({children, onClick}) => {
    return (
        <button 
            className="w-24 shadow-2xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700
            rounded-full focus:outline-none focus:ring focus:ring-violet-300 ..."
             onClick={onClick}>
            {children}
        </button>
     )
}