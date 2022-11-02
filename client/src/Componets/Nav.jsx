import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import nav from "../css/Nav.module.css"
import { getName,refreshPag } from "../Redux/actions";


export default function Nav({setCurrentPage,setLoading}){
    const dispatch=useDispatch()
    const [name,setName]=useState(" ")

    const handleChange=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(refreshPag())
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2700);
       dispatch(getName(name))
        setCurrentPage(1)
    }

    return(
        <>

        <div className={nav.container}>
            <div className={nav.children}>
                <img className={nav.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="POKEMON"/>
            </div>
            <div className={nav.children}>
                <input className={nav.search}
                placeholder="Ingrese Nombre del Pokemon"
                type="text"
                onChange={handleChange}
                />
                <button type="submit" onClick={handleSubmit} className={nav.button}><img className={nav.image2} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" alt="POKEBOLA"/></button>
            </div>
            <div className={nav.children}>
                <button className={nav.button}><img className={nav.image2} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GITHUB"/></button>
                <button className={nav.button}><img className={nav.image2} src="https://upload.wikimedia.org/wikipedia/commons/6/6d/LinkedinBlack.png" alt="LINKEDIN"/></button>
            </div>
        </div>
        </>
    )
}