import React from "react";
import  { Data }  from "../../data/Data";
import {Card, CardFooter, CardHeader, CardPicture, CardPrice,CardTitle} from '../../component/Card/Card';
import { ButtonMoney } from "../Money/ButtonMoney";
import { PlayerActiveBuy } from "./PlayerActiveBuy";

export const Player = () => {

    return (
        <>
        <ButtonMoney />
        <div className="flex flex-column justify-center flex-wrap pt-20">
            {Data.map((player ) => (
              <Card> 
                <CardHeader>
                <CardPicture src={player.picture}/>
                </CardHeader>
                <CardFooter>
                <CardTitle> {player.name}</CardTitle>
                <CardPrice> {player.price} Dollars</CardPrice>
                <PlayerActiveBuy text={ "Buy " +player.name} player={player.price}> 
                </PlayerActiveBuy>
                </CardFooter>
              </Card>  
        ))}
        </div>
        </>
    )
}