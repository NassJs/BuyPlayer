import React, { useState } from "react";
import './Players.css';
import {
  Card, CardFooter, CardHeader,
  CardInformation, CardPicture, CardPrice,
  CardTitle
} from '../../component/Card/Card';
import { PlayerActiveBuy } from "./PlayerActiveBuy";
import { useMoney } from "../../context/MoneyContext";
import { Score } from "../../component/Score/Score";
import { PlayerValidateBuy } from "./PlayerValidateBuy";
import { usePlayers } from "../../context/PlayerContext";
import { ActiveModal } from "../Modal/ActiveModal";
import { Button } from '../../component/Button/Button'
import { FilterByCategory } from "../Filter/FilterByCategory";

export const Players = () => {

  const { money } = useMoney();
  const { players } = usePlayers();
  const [allPlayers, setPlayers] = useState(players)
  const [filterCategory, setFilterCategory] = useState()


  return (
    <>
      <Score> Monnaie : {money} </Score>
      <div className="position_modal">
        <ActiveModal />
      </div>

      <FilterByCategory
        setPlayers={setPlayers}
        allPlayers={allPlayers}
        setFilterCategory={setFilterCategory}
      />

      <div className="flex flex-column justify-center flex-wrap gap-4 pt-20">
        {allPlayers.map((player, key) => (
          <Card>
            <CardHeader key={key.id}>
              <CardPicture src={player.picture} />
            </CardHeader>
            <CardFooter>
              <CardTitle> {player.name} </CardTitle>
              <CardPrice> {player.price} Dollard </CardPrice>
              <CardInformation> {player.poste}</CardInformation>
              <PlayerActiveBuy player={player} buy="Achat" />
              <PlayerValidateBuy unlock={player.player} />
            </CardFooter>
          </Card>
        ))}
      </div>


    </>
  )
}