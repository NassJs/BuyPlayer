import React, {useState} from "react";
import  { Data }  from "../../data/Data";
import {Card, CardFooter, CardHeader, CardInformation, CardPicture, CardPrice,CardTitle} from '../../component/Card/Card';
import { ButtonMoney } from "../Money/ButtonMoney";
import { PlayerActiveBuy } from "./PlayerActiveBuy";
import { useMoney } from "../../context/MoneyContext";

export const Player = () => {
  const {money, updateMyMoney} = useMoney();
  const [unlockPlayer , setUnlockPlayer ] = useState(null);
 
    const handleBuyPlayer = (playerPrice) => {
      if ( money >= playerPrice) {
        updateMyMoney(money - playerPrice);
        setUnlockPlayer("joueur acheter")
        console.log(unlockPlayer)
    } 
  }
    console.log(money)

    return (
        <>
        <ButtonMoney />
        <div className="flex flex-column justify-center flex-wrap gap-4 pt-20">
            {Data.map((player, key) => (
              <Card> 
                {/* <span>{player.id}</span> */}
                <CardHeader key={key.id}>
                <CardPicture src={player.picture}/>
                </CardHeader>
                <CardFooter>
                <CardInformation> #{player.id}</CardInformation>
                <CardTitle> {player.name} </CardTitle>
                <CardPrice> {player.price} Dollard </CardPrice>
                <PlayerActiveBuy onClick={()=> {handleBuyPlayer(player.price)}} text={unlockPlayer}
                player={player.price} buy="achat"/> 
                </CardFooter>
              </Card>  
        ))}
        </div>
        </>
    )
}