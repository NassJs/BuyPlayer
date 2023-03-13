import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";

export const PlayerValidateBuy = ({unlock}) => {

   if (unlock === "unlock")
    return (
        <div className="flex justify-center items-center text-lg"> Joueur acheté <AiFillCheckCircle /></div>
    )
}