import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";

export const PlayerValidateBuy = ({unlock}) => {

   if (unlock === "unlock")
    return (
        <div className="flex justify-center align-center"> Joueur acheté <AiFillCheckCircle /></div>
    )
}