import React from 'react'
import ''
export const ButtonDesign = ({ children, design }) => {
    return (
        <button className={`btn_design${design}`}> {children}</button >
    )
}
