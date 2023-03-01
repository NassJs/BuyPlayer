import React from "react";
import { Button } from "../../component/Button/Button";
import { useMoney } from "../../context/MoneyContext";


export const PlayerActiveBuy = ({text, buy ,player, onClick, }) => {

    const {money} = useMoney();

    if (money >= player) {
        return (
            <div className="flex flex-col items-center px-8">
                <Button  onClick={onClick} variant="variant"> {buy} </Button>
            </div>
        ) 
    }   
        return (
            <div>
                <div className="buy_player"> {text} </div>
            </div>
        )
    
        
}