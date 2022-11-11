import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getTypesPokemon, orderAttack, orderAzZa, orderCreate, orderType,orderExperiencie } from "../Redux/actions";
import filter from "../css/Filter.module.css"

export default function Filter({setCurrentPage}){
    const dispatch=useDispatch()
    const types = useSelector((state)=>state.typesPokemon)
    useEffect(()=>{
        dispatch(getTypesPokemon())
    },[dispatch])
// console.log(types)
    const handleAlfabetic=(e)=>{
        e.preventDefault()
        dispatch(orderAzZa(e.target.value))
        setCurrentPage(1)
    }
    const handleAttack=(e)=>{
        e.preventDefault()
        dispatch(orderAttack(e.target.value))
        setCurrentPage(1)
    }
    const handleCreate=(e)=>{
        e.preventDefault()
        dispatch(orderCreate(e.target.value))
        setCurrentPage(1)
    }
    const handleType=(e)=>{
        e.preventDefault()
        dispatch(orderType(e.target.value))
        setCurrentPage(1)
    }
   

    return(
        <div className={filter.conteiner} >
       <div>     
       <select className={filter.select} onChange={handleAlfabetic} >
        <option selected disabled hidden>Ordenar Alfabeticamente</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
       </select>
       </div>

       <div>
       <select className={filter.select} onChange={handleAttack}  >
       <option selected disabled hidden>Ordenar por Ataque</option>
       <option value="min">Ataque Min</option>
       <option value="max">Ataque Max</option>
       </select>
       </div>

      <div>
      <select className={filter.select} onChange={handleCreate} >
      <option selected disabled hidden>Pokemons Creados/Api</option>
      <option value="creados">Creados</option>
      <option value="api">Api</option>
      </select>
     </div>

     <div>
     <select className={filter.select} onChange={handleType}>
      <option selected disabled hidden>Tipos de Pokemons</option>
      <option value="todos">Todos</option>
     {types?.map((type)=>{
        return(
        <option key={type.id} value={type.name}>{type.name}</option>
        )
    })}
     </select>
     </div>  

   
 

     </div>
    )
}