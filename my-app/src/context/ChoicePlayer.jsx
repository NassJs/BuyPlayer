import React, {createContext, useMemo, useState, useContext} from "react";

const ChoicePlayerContext = createContext();

export const ChoicePlayerProvider = ({children}) => {
    const [choicePlayer, setChoicePlayer] = useState([]);
    console.log(choicePlayer)
    const value = useMemo(() => ({
        choicePlayer, setChoicePlayer
    }), [choicePlayer])

    return (
        <ChoicePlayerContext.Provider value={value}>
            {children}
        </ChoicePlayerContext.Provider>
    )
}


export const useChoicePlayer = () => {
    const {choicePlayer, setChoicePlayer} = useContext(ChoicePlayerContext);
    
    const SavePlayer = (value) => {
        localStorage.setItem('players', JSON.stringify(value))
        setChoicePlayer([...choicePlayer, value]);
    }

    const getPlayer = () => {
        let getAll = localStorage.getItem("players")
        return JSON.parse(getAll)
     }

    return {choicePlayer, SavePlayer , getPlayer}
}