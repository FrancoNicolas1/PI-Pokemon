import React from "react";
import { Link } from "react-router-dom";
import landing from "../css/Landing.module.css"



export default function LandinPage () {
    return(
        <>
        <div className={landing.box3}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>
        </div>
        <div className={landing.box}>
        <img src="https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-7.gif"/>
        </div>
        <div className={landing.box2}>
        <Link to={"/home"}><button className={landing.button}>Bienvenido</button></Link>
        </div>
        </>
    )

}