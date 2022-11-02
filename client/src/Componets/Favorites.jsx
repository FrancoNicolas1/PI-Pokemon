import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorites } from "../Redux/actions";

export default function Favorites(){
    const dispatch=useDispatch()
    const fav=useSelector((state)=>state.favorites)
    // console.log(fav)
    const handleDelete=(id)=>{
        dispatch(deleteFavorites(id))
    }
    // console.log(fav)

    return(
        <>
        <h1>FAVORITOS</h1>
        {fav?.map((e)=>{
            return(
                <>
                <button onClick={()=>handleDelete(e.id)}>
                <img  src={e.image}/>
                </button>
                </>
            )
        })}
        
        </>
    )
}