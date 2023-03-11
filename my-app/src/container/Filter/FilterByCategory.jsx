import React from 'react'
import { Button } from '../../component/Button/Button'

export const FilterByCategory = ({ allPlayers, setPlayers, setFilterCategory }) => {
    console.log("allPlayers", allPlayers);
    const handleFiltre = (poste) => {
        if (poste === "All") {
            setFilterCategory(allPlayers)
        } else {
            const filtered = allPlayers.filter((fil) => fil.poste === poste)
            setPlayers(filtered)
        }

    }

    return (
        <div>
            <Button onClick={() => handleFiltre("All")}>
                ALL
            </Button>
            <Button onClick={() => handleFiltre("Attaquant")}>
                Attaquant
            </Button>
            <Button onClick={() => handleFiltre("Milieu")}>
                Milieu
            </Button>
            <Button onClick={() => handleFiltre("Défenseur")}>
                Défenseur
            </Button>
        </div>
    )
}
