
import React from "react";
import { Link } from "react-router-dom";
import card from "../css/Card.module.css"

export default function Card({id,name,image,types, hp,attack,defense}){
   

    return(
        <div className={card.container} key={id}>
            <div className={card.children}>
            <div className={card.children2}>  
            <h1>{name}</h1>
            <ul>
            <li>Hp: {hp}</li>
            <li>Attack: {attack}</li>
            <li>Defense: {defense}</li>
            </ul>
            </div>  
            <div className={card.type}>
                <h3>Tipo</h3>
            {types.map((type)=>{
                return(
                    <>
                    <p key={type.id}>{type}</p>
                    </>
                )
            })}
            </div>
            <Link to={"/pokemon/"+id}>
            <img className={card.image} src={image} alt="BOX/POKE"/>
            </Link>


            </div>
                    
        </div>
    )
}