import React, {useState} from "react";
import './ActiveModal.css'
import { Modal } from "../../component/Modal/Modal";
import { useCount } from "../../context/Count";
import { CardTitle } from "../../component/Card/Card";
import { useChoicePlayer } from "../../context/ChoicePlayer";
import { useEffect } from "react";
import { Note } from "../../component/Note/Note";

export const ActiveModal = () => {

    const sizeTeam = 11;
    const {count} = useCount();
    const {choicePlayer} = useChoicePlayer();
    const [note , setNote] = useState(0);   

    useEffect(() => {
        setNote(0);
        for (let i = 0; i < choicePlayer.length; i++ ) {
            setNote((note)=>note +choicePlayer[i].note / sizeTeam) 
        }  
    }, [choicePlayer])

    if(count === sizeTeam)

    return (
        <div className="activeModal">
            <Modal>
            <div className="active_modal">
            <CardTitle> Tu a ton 11 de rêves :  </CardTitle>
            </div>
            <div className="active_modal_container">
                <div className="active_modal_note">     
                    <Note> Note : {note.toFixed(0)} général</Note>
                </div>
            </div>
            </Modal> 
        </div>
    )
}