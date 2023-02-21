import React from "react";
import {Button} from '../../component/Button/Button'
import {useMoney} from '../../context/MoneyContext'

export const ButtonMoney = () => {
    const {money , updateMyMoney} = useMoney()
    
    const handleIncremente = (value) => {
        updateMyMoney(money + value)
    }
    return (
        <Button onClick={() => handleIncremente(1)}> Monnaie {money} </Button>
    )
}