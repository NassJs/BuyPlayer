import React, {createContext, useMemo, useState, useContext} from "react";
import { Data } from "../data/Data";


export const PlayerContext = createContext();
export const PlayerProvider = ({children}) => {
    const [players, setPlayers] = useState(Data);
    
    const value = useMemo(() => ({
        players , setPlayers
    }), [players])

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayers = () => {
const { players, setPlayers } = useContext(PlayerContext);

    const getPlayer = (idPlayer)=> {
        for(let i = 0; i<players.length; i++){
            if( players[i].id === idPlayer){
            return players[i];
        }
    }
 }
    const unlockPlayer = (player) => {
        const arrCopy = [...players];
        for( let i = 0; i<arrCopy.length; i++){
            if( arrCopy[i] === player){
                arrCopy[i].player = "unlock"; 
            }
        }
        setPlayers(arrCopy);
     }
    return { players, unlockPlayer, getPlayer }
}