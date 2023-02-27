import React from "react";
import { Button } from "../../component/Button/Button";
 import { Data }  from "../../data/Data";
import { useMoney } from "../../context/MoneyContext";

export const PlayerActiveBuy = ({text, player}) => {
    const {money, updateMyMoney} = useMoney();
    
    const handleChange = () => {
        console.log("mon btn")
        for (let i = 0; i <Data.length; i++){
            
            console.log("cls", Data[i].price)
        }
    }

    if (money >= player )
    return(
        <>
        
        <Button variant="variant" onClick={handleChange()}> {text}</Button>
        </>
    )
}