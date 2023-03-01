import React, {createContext, useMemo, useState, useContext} from "react";
import { Data } from "../data/Data";


export const PlayerContext = createContext();
export const PlayerProvider = ({children}) => {
    
    const [player, setPlayer] = useState(Data)
    const value = useMemo(() => ({
        player , setPlayer
    }), [player])
    console.log(value)


    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => {
const {player, setPlayer} = useContext(PlayerContext);
    return { player, setPlayer }
}