import React from "react";
import { Button } from "../../component/Button/Button";
import { useMoney } from "../../context/MoneyContext";
import { usePlayers } from "../../context/PlayerContext";
export const PlayerActiveBuy = ({buy, player}) => {

    const {money, updateMyMoney} = useMoney();
    const {unlockPlayer} = usePlayers();
    
    const handleBuyPlayer = () => {
        if ( money >= player.price) {
            updateMyMoney(money - player.price);
            unlockPlayer(player);
        }    
    }

    if (money >= player.price && player.player !== "unlock") {
        
        return (
            <div className="flex flex-col items-center px-8">
                <Button  onClick={() => handleBuyPlayer()} variant="variant"> {buy} </Button>
            </div>
        ) 
     }           
}