import React from "react";
import { Button } from '../../component/Button/Button';
import { useMoney } from '../../context/MoneyContext';
 import { useToast } from "../../component/Toast/Toast";
import { useEffect } from "react";

export const ButtonIncremente = ({value , unlock}) => {
    const {money , updateMyMoney} = useMoney();
    const setActive = useToast();
    
    const handleIncremente = () => {
        updateMyMoney(money + value)
    }

    useEffect(() => {
        if (money === unlock) {
           setActive(true);
           
        }
    }, [unlock, money ,setActive])

    if( unlock <= money)
    return (
        <>
         <Button onClick={() => handleIncremente(value)}> Monnaie {value} </Button>
        </>
    )
    return null;
    
}


