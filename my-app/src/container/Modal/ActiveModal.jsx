import React from "react";
import { Modal } from "../../component/Modal/Modal";
import { useCount } from "../../context/Count";
import { Button } from "../../component/Button/Button";

export const ActiveModal = (value) => {
    const {count} = useCount()
    if( count === 5)

    return (
        <div className="activeModal">
            <Modal>
            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                expedita perspiciatis! Cum eum id, sint, expedita ex laboriosam, accusamus 
                voluptatum molestiae aperiam hic nulla tenetur 
                ab cupiditate atque accusantium eveniet!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                expedita perspiciatis! Cum eum id, sint, expedita ex laboriosam, accusamus 
                voluptatum molestiae aperiam hic nulla tenetur 
                ab cupiditate atque accusantium eveniet!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                expedita perspiciatis! Cum eum id, sint, expedita ex laboriosam, accusamus 
                voluptatum molestiae aperiam hic nulla tenetur 
                ab cupiditate atque accusantium eveniet!
                
            </div>
            <Button> Ta Team </Button>
            </Modal> 
        </div>
    )
}