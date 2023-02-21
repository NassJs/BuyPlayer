import React from "react";
import { Data } from "../../data/Data";
import {Card, CardFooter, CardHeader, CardPicture, CardPrice,CardTitle} from '../../component/Card/Card'

export const Player = () => {
    
    console.log(Data);
    return (
        <div className="flex flex-row">
            {Data.map((player ) => (
              <Card> 
                <CardHeader>
                <CardPicture src={player.picture}/>
                </CardHeader>
                <CardFooter>
                <CardTitle> {player.name}</CardTitle>
                <CardPrice> {player.price} Dollars</CardPrice>
                </CardFooter>
              </Card>  
        ))}
        </div>
    )
}