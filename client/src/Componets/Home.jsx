import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { favorites, getPokemons, refreshPag } from "../Redux/actions";
import Nav from "./Nav";
import Loading from "./Loading";
import Card from "./Card";
import  Pagination  from "./Pagination";
import home from "../css/Home.module.css"
import Filter from "./Filter";
import { Link } from "react-router-dom";

export default function Home () {
    const [loading, setLoading] = useState(false);
    const dispatch=useDispatch()
    const pokemons=useSelector((state)=>state.allPokemons)
    // const types= useSelector((state)=> state.typesPokemon)
    /////////////////////////////////////////////////////////////
    const [currentPage,setCurrentPage]=useState(1) //pagina actual
    const [pokemonForPage, setPokemonForPage]=useState(12) //pokemon por Pagina
    const indexOfLastPokemon= currentPage * pokemonForPage
    const indexOfFirtsPokemon = indexOfLastPokemon - pokemonForPage
    const currentPokemon = pokemons.slice(indexOfFirtsPokemon,indexOfLastPokemon)

    const pag = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    // console.log(allPokemon)
    // console.log(types)
    // console.log(currentPage)
    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1700);
        dispatch(getPokemons())
        // dispatch(getTypesPokemon())
    },[dispatch])

    const handleRefresh=()=>{
        dispatch(refreshPag())
        dispatch(getPokemons())
    }
    const handleClick=(pokemon)=>{
        // console.log(pokemon)
        dispatch(favorites(pokemon))
     }
    //  console.log(pokemons)

    return(
        <>
            <Nav setCurrentPage={setCurrentPage} setLoading={setLoading}/>
            <div className={home.cajita}>
                <button className={home.buttons} onClick={handleRefresh}>Refresh</button>
                <Link to={"/form"}><button className={home.buttons}>Crear Pokemon</button></Link>
                <Link to={"/favorites"}><button className={home.buttons}>Favoritos</button></Link>
            </div>
            <Filter setCurrentPage={setCurrentPage}/>
            <br/>
            {loading?
            (<Loading/>)
            :(<div>
            <Pagination 
            pokemonForPage={pokemonForPage} 
            pokemons={pokemons.length} 
            pag={pag} 
            currentPage={currentPage}/>
            <div className={home.cards}>
            {currentPokemon?.map((pokemon)=>{
                return(
                    <div key={pokemon.id}>
                    <Card
                    className={home.cards}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types}
                    hp={pokemon.hp}
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    /> 
                    <button onClick={()=>handleClick(pokemon)}>Agregar a favoritos</button>   
                    </div>
                )
                
        })}
        </div>
             	   
        </div>)}
       
        </>
    )

}