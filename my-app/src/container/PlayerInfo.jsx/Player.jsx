import React, {useState} from "react";
import {Card, CardFooter, CardHeader, CardInformation, CardPicture, CardPrice,CardTitle} from '../../component/Card/Card';
import { ButtonMoney } from "../Money/ButtonMoney";
import { PlayerActiveBuy } from "./PlayerActiveBuy";
import { useMoney } from "../../context/MoneyContext";
import { Score } from "../../component/Score/Score";
import { PlayerValidateBuy } from "./PlayerValidateBuy";
import { usePlayer } from "../../context/PlayerContext";


export const Player = () => {

  const {money, updateMyMoney} = useMoney();
  const [validateBuy, setValidateBuy] = useState("");
  const playerDatas = usePlayer();

    const handleBuyPlayer = (player) => {
      console.log("mes player", player.price);
        if ( money >= player.price) {
          updateMyMoney(money - player.price);
          setValidateBuy("unlock")
        }          
  }

    return (
        <>
        <ButtonMoney />
        <Score> Monnaie : {money} </Score>
        <div className="flex flex-column justify-center flex-wrap gap-4 pt-20">
            {playerDatas.player.map((player, key) => (
              <Card> 
                <CardHeader key={key.id}>
                <CardPicture src={player.picture}/>
                </CardHeader>
                <CardFooter>
                <CardInformation> #{player.id}</CardInformation>
                <CardTitle> {player.name} </CardTitle>
                <CardPrice> {player.price} Dollard </CardPrice>
                <PlayerActiveBuy onClick={()=> {handleBuyPlayer(player)}}
                 player={player.price} buy="achat" /> 
                <PlayerValidateBuy unlock={validateBuy}/>
                </CardFooter>
              </Card>  
        ))}
        </div>
        </>
    )
}