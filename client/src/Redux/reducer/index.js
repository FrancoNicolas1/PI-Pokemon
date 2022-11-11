const initialState={
    allPokemons:[],
    pokemons:[],
    idPokemon:[],
    typesPokemon:[],
    favorites:[],
    post:[],    
    testBack:[]
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "GET_POKEMONS":
            return {
                ...state,
                allPokemons:action.payload,
                pokemons:action.payload
            }
        case "GET_NAME_POKEMON":
            return{
                ...state,
                allPokemons:action.payload
            }    
        case "GET_ID_POKEMON":
            return{
                ...state,
                idPokemon:action.payload
            }
        case "GET_TYPES_POKEMON":
            return{
                ...state,
                typesPokemon:action.payload
            }    
        case "ORDER_AZ_ZA":
            // console.log("Llegaste a reducer Az")
            let allPoke= state.allPokemons
            // let orderAlfa= action.payload === "a-z"?
            // allPoke.sort((a, b) => a.name.localeCompare(b.name))
            // :allPoke.reverse()
            // console.log(orderAlfa)
            let orderAlfabetic
            // if(action.payload === "todos"){
            //       pepe =state.pokemons
            // }
            // else 
            
            if(action.payload === "a-z"){
                orderAlfabetic=allPoke.sort((a,b)=> a.name.localeCompare(b.name))
            }else if( action.payload === "z-a"){
                orderAlfabetic=allPoke.sort((a,b)=> b.name.localeCompare(a.name))
            }
            // console.log(orderAlfabetic)
            return{
                ...state,
                allPokemons:[...orderAlfabetic]    
                
            }       
        case "ORDER_ATTACK":
            // console.log("Llegaste a reducer Attack")
            let allPoke2=state.allPokemons
            let orderAttack
            if(action.payload === "min"){
             orderAttack=allPoke2.sort((a,b)=>a.attack-b.attack)  
            }else if(action.payload === "max"){
                orderAttack= allPoke2.sort((a,b)=>b.attack-a.attack)  
            }
            return{
                ...state,
                allPokemons:[...orderAttack]
            }       
            case "ORDER_CREATE":
            // console.log("Llegaste a reducer Create")
            let allPoke3=state.pokemons
            let orderBy = action.payload==="creados"?
            allPoke3.filter((e)=>e.created)
            :allPoke3.filter((e)=>!e.created)
            if(!orderBy.length){
                alert("Debe crear un pokemon para aplicar este Filtro")
                orderBy=allPoke3
            }


            return{
                ...state,
                allPokemons:[...orderBy]
            }       
            case "ORDER_TYPE":
            // console.log("Llegaste a reducer Type")
            let allPoke4=state.pokemons
            let orderType=action.payload === "todos"
            ?allPoke4
            :allPoke4.filter((e)=>e.types?.includes(action.payload))
            if(!orderType.length){
             alert ("Debe ingresar mas Pokemons para aplicar este filtro")
              orderType=allPoke4
            } 
            return{
                ...state,
            allPokemons:[...orderType]
            }    
            case "REFRESH_PAG":
                return{
            ...state,
            allPokemons:action.payload
                }
            case "FAVORITE":
                return{
                    ...state,
                    favorites:[...state.favorites, action.payload]
                }   
            case "DELETE_FAVORITE":
                return{
                    ...state,
                    favorites:state.favorites.filter((e)=>e.id !== action.payload)
                }     
              
            case "DELETE_POKEMON":
                return{
                    ...state
                }
            case "POSTEADO":
                return{
                    ...state,
                    post:action.payload
                }
            case "REFRESH_ID":
            return{
                ...state,
                idPokemon:[]
            }    

////////////////////////PRUEBA BACK/////////////////
            case "ORDER_AZ_ZA_BACK":
                // console.log("se llego al reducer")
                return{
                    ...state,
                    testBack:action.payload
                }    
            case "ORDER_ATTACK":
                console.log("llegasate")
                return{
                    ...state
                }

        
        default: return {...state}
    }
}