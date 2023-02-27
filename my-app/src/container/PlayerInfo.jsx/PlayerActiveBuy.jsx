import React from "react";
import { Button } from "../../component/Button/Button";
import { Data }  from "../../data/Data";
import { useMoney } from "../../context/MoneyContext";
import { Toast } from "../../component/Toast/Toast";


export const PlayerActiveBuy = ({text, player}) => {
    const {money, updateMyMoney} = useMoney();
    console.log(money)


    if (money >= player )
    return(
        <div className="flex flex-col items-center px-8">
        <Button variant="variant"> {text}</Button>
        <Toast toastVariant="toastVariant"> Player debloqué {text}</Toast>
        </div>
    )
}