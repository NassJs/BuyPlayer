import React from "react";
import { Button } from "../../component/Button/Button";
import { useMoney } from "../../context/MoneyContext";
import { usePlayers } from "../../context/PlayerContext";
import { useCount } from "../../context/Count";
export const PlayerActiveBuy = ({buy, player}) => {

    const {money, updateMyMoney} = useMoney();
    const {unlockPlayer} = usePlayers();
    const {count, IncrementeCount} = useCount();
    console.log(count);
    const handleBuyPlayer = () => {
        if ( money >= player.price) {
            updateMyMoney(money - player.price);
            unlockPlayer(player);
            IncrementeCount(1);
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