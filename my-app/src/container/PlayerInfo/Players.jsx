import React from "react";
import {Card, CardFooter, CardHeader, CardPicture, CardPrice,CardTitle} from '../../component/Card/Card';
import { ButtonMoney } from "../Money/ButtonMoney";
import { PlayerActiveBuy } from "./PlayerActiveBuy";
import { useMoney } from "../../context/MoneyContext";
import { Score } from "../../component/Score/Score";
import { PlayerValidateBuy } from "./PlayerValidateBuy";
import { usePlayers } from "../../context/PlayerContext";
import { Coachs } from "../Coach/Coachs";


export const Players = () => {

  const {money} = useMoney();
  const {players} = usePlayers();

    return (
        <>
        <ButtonMoney />
        <Score> Monnaie : {money} </Score>
        <Coachs unlockCoach="3"/> 
        <div className="flex flex-column justify-center flex-wrap gap-4 pt-20">
            {players.map((player, key) => (
              <Card> 
                <CardHeader key={key.id}>
                <CardPicture src={player.picture}/>
                </CardHeader>
                <CardFooter>
                <CardTitle> {player.name} </CardTitle>
                <CardPrice> {player.price} Dollard </CardPrice>
                <PlayerActiveBuy player={player} buy="Achat" /> 
                <PlayerValidateBuy unlock={player.player}/>
                </CardFooter>
              </Card>  
        ))}
        </div>
        
        </>
    )
}