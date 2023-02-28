import React from "react";
import { Button } from "../../component/Button/Button";
import { GrValidate } from 'react-icons/gr';
import { useMoney } from "../../context/MoneyContext";
import { Toast } from "../../component/Toast/Toast";


export const PlayerActiveBuy = ({text, player, onClick}) => {
    const {money} = useMoney();

    if (money >= player ) {

        return(
            <div className="flex flex-col items-center px-8">
                <Button onClick={onClick} variant="variant"> {text} </Button>
                <Toast toastVariant="toastVariant"> <GrValidate/> Player debloqué {text}</Toast>
            </div>
        ) 
    }
        return (
        <Toast className="bg-orange-300" toastVariant="toastVariant"> Joueur pas encore débloquer</Toast>
        )


        
}