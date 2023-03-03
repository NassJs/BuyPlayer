import React from "react";
import './Home.css';
import 'animate.css';
import { Welcome } from '../../component/Welcome/Welcome';
import { Link } from "react-router-dom";
import { Button } from "../../component/Button/Button";

export const Home = () => {
    return (
        <div className="home">
            <div className="animate__animated animate__bounceInDown"> 
            <div className="home_center">
             <Welcome variantText="variantText">
                    Welcome, viens faire ton équipe de rêve.  
             </Welcome>
             <div className="home_compostion_center">
                <div className="home_choice">  Choisis ta meilleur composition  </div>
                <div className="home_composition"> 4-3-3 / 3-4-4 / 5-4-1  </div>
             </div>
             <div className="home_position_btn">
             <Button>
                <Link to="/player"> Let's Go</Link>
             </Button>
             </div>
            </div>
            </div>
        </div>
    )
} 