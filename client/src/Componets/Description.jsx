import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getIdPokemon, deletePokemo } from "../Redux/actions";
import "../css/Description.css"
import Loading from "./Loading";

export default function Description(){
    const [loading, setLoading] = useState(false);
   const dispatch=useDispatch()
   const history=useHistory()
   const idPokemon=useSelector((state)=>state.idPokemon)
   console.log(idPokemon)

   const {id}= useParams()
  

   useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
    dispatch(getIdPokemon(id))
   },[dispatch])
  //  console.log(idPokemon)

   const handleDelete=()=>{
    if(idPokemon[0].created){
      dispatch(deletePokemo(id))
      alert("se elimino pokemon")
      history.push("/home")
    }else{
      alert("no se puede")
    }
   }

    return(
        <>
        <Link to={"/home"}><button className="volverPadre"><img className="volver" src="https://cdn-icons-png.flaticon.com/512/32/32170.png"/></button></Link>
        <button onClick={handleDelete}>DELETE</button>
        
        {loading?(<Loading/>)
        :(<div>
        {idPokemon.map((e)=>{
            return(
            <div className={e.types[0]}>
               <div className="caja">
                 <img src={e.image} alt="POKEMONS"/>  
                 <h1>{e.name}</h1>
                 <div className="caja3">
                 <h2>Tipos</h2>
               {e.types.map((e)=>{
                return(
                    <>
                    <h3>{e}</h3>
                    </>
                )
               })}
               </div>
                 <div className="caja2">
                 <p>Hp:{e.hp}</p>
                 <p>Attack:{e.attack}</p>
                 <p>Defense:{e.defense}</p>
                 <p>Speed:{e.speed}</p>
                 <p>Height:{e.height}</p>
                 <p>Weigth:{e.weight}</p>
                 </div>
                 </div>
            </div>     
        )
        })}
        </div>)}
        </>
    )
}