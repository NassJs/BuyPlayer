import React from "react";
import { Button } from '../../component/Button/Button';
import { useMoney } from '../../context/MoneyContext';
import { useToast } from "../../component/Toast/Toast";
import { useEffect } from "react";

export const ButtonIncremente = ({ value, unlock, }) => {

    const { money, updateMyMoney } = useMoney();
    const setActive = useToast();
    const resUseToast = useToast();

    const handleIncremente = () => {
        updateMyMoney(money + value)
    }

    useEffect(() => {
        if (money === unlock) {
            resUseToast.setActive(true);
            resUseToast.setText("New Button ");

        }
    }, [unlock, money, setActive, resUseToast])

    if (unlock <= money)
        return (
            <div className="">
                <Button onClick={() => handleIncremente(value)}> Monnaie x  {value} </Button>
            </div>
        )
    return null;

}


