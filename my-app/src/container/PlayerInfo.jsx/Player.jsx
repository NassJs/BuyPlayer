import React from "react";
import  { Data }  from "../../data/Data";
import {Card, CardFooter, CardHeader, CardPicture, CardPrice,CardTitle} from '../../component/Card/Card';
import { ButtonMoney } from "../Money/ButtonMoney";
import { PlayerActiveBuy } from "./PlayerActiveBuy";
import { useMoney } from "../../context/MoneyContext";

export const Player = () => {

  const {money, updateMyMoney} = useMoney();

    const handleBuyPlayer = (playerPrice) => {
      if ( money >= playerPrice){
        updateMyMoney(money - playerPrice)
      
    }
  }
    console.log(money)

    return (
        <>
        <ButtonMoney />
        <div className="flex flex-column justify-center flex-wrap pt-20">
            {Data.map((player, key) => (
              <Card> 
                <CardHeader key={key.id}>
                <CardPicture src={player.picture}/>
                </CardHeader>
                <CardFooter>
                <CardTitle> {player.name}</CardTitle>
                <CardPrice> {player.price} Dollars</CardPrice>
                <PlayerActiveBuy onClick={()=> {handleBuyPlayer(player.price)}} text="Buy" player={player.price} /> 
                </CardFooter>
              </Card>  
        ))}
        </div>
        </>
    )
}