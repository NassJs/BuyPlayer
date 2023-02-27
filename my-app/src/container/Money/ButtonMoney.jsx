import React from "react";
import { ButtonIncremente } from "./ButtonIncremente";


export const ButtonMoney = () => {
    return (
    <div className="flex justify-center px-8"> 
        <ButtonIncremente value={1} unlock={0} />
        <ButtonIncremente value={3} unlock={10} />
        <ButtonIncremente value={5} unlock={20} />
    </div>
    )
}