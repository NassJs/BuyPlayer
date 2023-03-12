import React from 'react';
import './FilterByCategory.css';
import { ButtonDesign } from '../../component/Button/ButtonDesign';

export const FilterByCategory = ({ setFilterCategory, allPlayers }) => {

    const handleFiltre = (poste) => {
        if (poste === "All") {
            setFilterCategory(allPlayers)
        } else {
            const filtered = allPlayers.filter((fil) => fil.poste === poste)
            setFilterCategory(filtered)
        }

    }

    return (
        <div className="filter_byCategory">
            <ButtonDesign design="design" size="s" onClick={() => handleFiltre("All")}>
                All
            </ButtonDesign>
            <ButtonDesign design="design" size="s" onClick={() => handleFiltre("Attaquant")}>
                Attaquant
            </ButtonDesign>
            <ButtonDesign design="design" size="s" onClick={() => handleFiltre("Milieu")}>
                Milieu
            </ButtonDesign>
            <ButtonDesign design="design" size="s" onClick={() => handleFiltre("Défenseur")}>
                Défenseur
            </ButtonDesign>
        </div>
    )
}
