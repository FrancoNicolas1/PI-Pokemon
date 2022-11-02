import axios from "axios"

export function getPokemons(){
    return async function(dispatch){
        const allPokemons = await axios.get("http://localhost:3001/pokemon")
        return dispatch({
            type: "GET_POKEMONS",
            payload:allPokemons.data
        })
    }
}

export function getName(name) {
        
    return async function(dispatch){
        try {
        const getNamePokemon= await axios.get(`http://localhost:3001/pokemon?name=${name}`)
        return dispatch({
            type:"GET_NAME_POKEMON",
            payload:getNamePokemon.data
        })
    } catch(error) {
        console.log(error)
}
    }
}
export function getIdPokemon(id){
    return async function(dispatch){
        try {
            
        let getIdPokemon = await axios.get(`http://localhost:3001/pokemon/${id}`)
        return dispatch({
            type:"GET_ID_POKEMON",
            payload:getIdPokemon.data
        })
    } catch (error) {
        return alert("No se encontro ese ID Pokemon/Accion")      
    }
    }
}

export function getTypesPokemon(){
    return async function(dispatch){
        let getTypesPokemon =await axios.get("http://localhost:3001/type")
        return dispatch({
            type:"GET_TYPES_POKEMON",
            payload:getTypesPokemon.data
        })
    }
    
}
export function postPokemon(payload){
    return async function(dispatch) {
        try {
            const json = await axios.post("http://localhost:3001/pokemon", payload)
            return json
            
        }catch{
            return alert ("No se pudo ingresar el Pokemon/accion")
        }
    }
}


export function orderAzZa(payload){
        return{ 
            type:"ORDER_AZ_ZA",
            payload:payload
        }
}

export function orderAttack(payload){
    return{
        type:"ORDER_ATTACK",
        payload:payload
    }
}
export function orderCreate(payload){
    return{
        type:"ORDER_CREATE",
        payload:payload
    }
}
export function orderType(payload){
    return{
        type:"ORDER_TYPE",
        payload:payload
    }
}

export function refreshPag(payload){
    return{
        type:"REFRESH_PAG",
        payload:[]
    }
}

export function favorites(payload){
    return{
        type:"FAVORITE",
        payload
    }
}
export function deleteFavorites(id){
    return{
        type:"DELETE_FAVORITE",
        payload:id
    }
}

export function deletePokemo(id){
    return async function(dispatch){
        const json= await axios.delete(`http://localhost:3001/pokemon/${id}`)
        return{
            type:"DELETE_POKEMON",
            payload:json
        }

    }
}
