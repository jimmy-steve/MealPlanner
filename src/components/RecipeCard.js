import React from "react";
import axios from "axios";
import "./RecipeCard.scss";

function RecipeCard() {
    return(        
        <div className="border rounded m-3 card--container">
            <div className="card--img--container">
                <img src="./image1.jpg" alt="plat" className="card--img"></img>
            </div>
            <div className="card--text--container">
                <h4>Title</h4>
                <div className="row">
                    <div className="col">
                        <span class="material-symbols-outlined">av_timer</span>
                        <span className="align-top m-1">25 min</span>
                    </div>
                    <div className="col">
                        <span class="material-symbols-outlined">cooking</span>
                        <span className="align-top m-1">40 min</span>
                    </div>
                </div>      
            </div>  
        </div>
    )
}

export default RecipeCard;