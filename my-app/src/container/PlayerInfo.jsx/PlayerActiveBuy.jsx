import React from "react";
import { Button } from "../../component/Button/Button";
 import { Data }  from "../../data/Data";
import { useMoney } from "../../context/MoneyContext";

export const PlayerActiveBuy = ({children, player}) => {
    const {money} = useMoney();
    
    if (money >= player )
    return(
            <Button> {children}</Button>
    )
}