import React, { useEffect } from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getTypesPokemon, postPokemon } from "../Redux/actions";
import validate from "./FormsError";
import form from "../css/Form.module.css"
import { Link, useHistory } from "react-router-dom";

export default function Form(){
    const dispatch=useDispatch()
    const typesAll = useSelector((state)=>state.typesPokemon)
   
    
    useEffect(()=>{
        dispatch(getTypesPokemon())
        
    },[dispatch])
    const history=useHistory()
    // console.log(types)
    const [error,setError]=useState({})
    const [pokemon,setPokemon]=useState({
        name:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        image:"",
        types:[]
    })
    let reg_exUrl = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
    let reg_exImg = /.*(png|jpg|jpeg|gif)$/;
    const handleChange=(e)=>{
        e.preventDefault()
        setPokemon({
            ...pokemon,
            [e.target.name]:e.target.value
        })
        setError(validate({
            ...pokemon,
            [e.target.name]:e.target.value
        }))
       
    }
    const handleTypes=(e)=>{
        e.preventDefault()
        setPokemon({
            ...pokemon,
            types:[...new Set([...pokemon.types,e.target.value])]
        })

    }

    const handleDelete=(e)=>{
        setPokemon({
            ...pokemon,
            types: pokemon.types.filter((type)=> type !== e)
        })
    }
   
    const handleSubmit=(e)=>{
        e.preventDefault()       
        if(Object.values(error).length > 0){
             alert ("Llene todos los campos para crear el Pokemon")
        }else if(pokemon.name === ""){
            alert("Debe llenar todos los campos")
        }else if(pokemon.types.length === 0 || pokemon.types.length > 2){
         alert("Debe tener algun tipo y que nu supere los 2")
        }else {
            dispatch(postPokemon(pokemon))
             // alert ("Pokemon creado")
        }
            // alert ("Pokemon creado")
            // history.push("/home")
        
    }
   
    return(
    <>
    <Link to={"/home"}><button className={form.volver2}><img className={form.volver} src="https://cdn-icons-png.flaticon.com/512/32/32170.png"/></button></Link>
    <div className={form.conteiner}>
    <form onSubmit={handleSubmit} className={form.boxForm}>
        <div className={form.box}> 
            <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/></p>
            <p>Crea tu pokemon</p>        
        </div>

        <div className={form.box1}>
        <span>Name</span>
        <input
        type="text"
        name="name"
        placeholder="Ingrese Name"
        value={pokemon.name}
        onChange={handleChange}
        />
        {error.name && (<label>{error.name}</label>)}
        </div>

        <div className={form.box1}>
        <span>Life/Hp</span>
        <input
        type="number"
        name="hp"
        value={pokemon.hp}
        placeholder="Ingrese Life/Hp"
        onChange={handleChange}
        />
        {error.hp && (<label>{error.hp}</label>)}
        </div>

        <div className={form.box1}>
        <span>Number</span>
        <input
        type="number"
        name="attack"
        placeholder="Ingrese Attack"
        value={pokemon.attack}
        onChange={handleChange}
        />
        {error.attack && (<label>{error.attack}</label>)}
        </div>

        <div className={form.box1}>
        <span>Defense</span>
        <input
        type="number"
        name="defense"
        placeholder="Ingrese Defensee"
        value={pokemon.defense}
        onChange={handleChange}
        />
        {error.defense && (<label>{error.defense}</label>)}
        </div>

        <div className={form.box1}>
        <span>Speed</span>
        <input
        type="number"
        name="speed"
        placeholder="Ingrese Speed"
        value={pokemon.speed}
        onChange={handleChange}
        />
        {error.speed && (<label>{error.speed}</label>)}
        </div>

        <div className={form.box1}>
        <span>Height</span>
        <input
        type="number"
        name="height"
        placeholder="Ingrese Height"
        value={pokemon.height}
        onChange={handleChange}
        />
        {error.height && (<label>{error.height}</label>)}
        </div>

        <div className={form.box1}>
        <span>Weight</span>
        <input
        type="number"
        name="weight"
        placeholder="Ingrese Weight"
        value={pokemon.weight}
        onChange={handleChange}
        />
        {error.weight && (<label>{error.weight}</label>)}
        </div>

        <div className={form.box1}>
        <span>Image</span>
        <input
        type="text"
        name="image"
        placeholder="Ingrese Image"
        value={pokemon.image}
        onChange={handleChange}
        />
         {error.image && (<label>{error.image}</label>)}
         {reg_exUrl.test(pokemon.image) && reg_exImg.test(pokemon.image) && 
            <div>
                <img src={pokemon.image} width="150px" height="100px"/>
            </div>
           }   
        
         </div>
        
        <div className={form.boxTypes}>
        <p>Agrege tipo de pokemon</p>

         <div className={form.boxTypes}>
        <select onChange={handleTypes}>
            {typesAll?.map((type)=>{
                return(
                    <option value={type.name} name="types" >{type.name}</option>
                )
            })}
        </select>
        {error.types && (<label>{error.types}</label>)}
        </div>
        <div className={form.box3}>
        {pokemon.types.map((e)=>{
            return(
                <div className={form.miniBox}>
                <label>{e}</label>
                <button type="button" onClick={()=>handleDelete(e)}>x</button>
                </div>
            )
        })}
        </div>
        
        </div>

        <div className={form.create}>
        <button className={form.buttonCreate} type="submit">Create Pokemon</button>
        </div>
    </form>
    </div>
    </>)
}