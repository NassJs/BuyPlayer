import React from 'react';
import { Coach } from '../../data/Coach';
import { CardPicture, Card, CardTitle, CardInformation } from '../../component/Card/Card';
import { useCount } from '../../context/Count';

export const Coachs = ({unlockCoach}) => {
     const {count } = useCount();
     const coachs = Coach;

    if(count >= unlockCoach  ){
        return (
            <div className="">
                {coachs.map((coach) => (
                    <Card>
                    <CardPicture src={coach.picture} />  
                    <CardTitle> {coach.name} </CardTitle> 
                    <CardInformation> {coach.role} </CardInformation> 
                    </Card>
                ))}
            </div>
        )
    }
}