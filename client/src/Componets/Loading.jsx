import React from "react";
import loading from "../css/Loading.module.css"

export default function Loading (){
    return(
       <div className={loading.container}>
        <div>
        <img className={loading.img} src="https://cdn.dribbble.com/users/985548/screenshots/3419648/snorlax.gif" alt="CARGANDO"/>
        </div>    
       </div>
    )
}