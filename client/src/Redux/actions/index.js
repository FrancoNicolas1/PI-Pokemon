import axios from "axios"

export function getPokemons(){
    return async function(dispatch){
        try {
        const allPokemons = await axios.get("/pokemon")
        return dispatch({
            type: "GET_POKEMONS",
            payload:allPokemons.data
        })
    } catch (error) {
        console.log(error)       
    }
    }
}

export function getName(name) {
        
    return async function(dispatch){
        try {
        const getNamePokemon= await axios.get(`/pokemon?name=${name}`)
        return dispatch({
            type:"GET_NAME_POKEMON",
            payload:getNamePokemon.data
        })
    } catch(error) {
        alert("No se encontro ese pokemon")
        const allPokemons = await axios.get("/pokemon")
        return dispatch({
            type: "GET_POKEMONS",
            payload:allPokemons.data
        })
}
    }
}
export function getIdPokemon(id){
    return async function(dispatch){
        try {
            
        let getIdPokemon = await axios.get(`/pokemon/${id}`)
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
        let getTypesPokemon =await axios.get("/type")
        return dispatch({
            type:"GET_TYPES_POKEMON",
            payload:getTypesPokemon.data
        })
    }
    
}
export function postPokemon(payload){
    return async function(dispatch) {
        try {
            const json = await axios.post("/pokemon", payload)
            return dispatch({
                type:"POSTEADO",
                payload:json.data
            })
            
        }catch(error){
            console.log(error.response.data.error)
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

export function refreshId(){
    return{
        type:"REFRESH_ID",
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
        const json= await axios.delete(`/pokemon/${id}`)
        return{
            type:"DELETE_POKEMON",
            payload:json
        }

    }
}
//////////////////////////prueba back///////////////
export function orderAlfabeticBack(order){
    console.log("se llego al action")
    return async function(dispatch){
        const pedidoBack= await axios.get(`/pokeback?orderAzZa=${order}`)
        return dispatch({
            type:"ORDER_AZ_ZA_BACK",
            payload:pedidoBack.data
        })
    }
}

export function orderAtack(order){
    return async function (dispatch){
        const pedido = await axios.get(`/pokeback?orderAttack=${order}`)
        return dispatch({
            type:"ORDER_ATTACK",
            payload:pedido.data
        })
    }
}
