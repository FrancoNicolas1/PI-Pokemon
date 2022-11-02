const axios = require('axios');
const e = require('express');
const { Pokemon, Type } = require("../db");


const infoApi= async()=>{
        const pokemonApi = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40");
        const pokemonUrl= pokemonApi.data.results.map(link => axios.get(link.url));
        // console.log(pokemonUrl)
        const infoUrlPokemons = await axios.all(pokemonUrl);
        //  console.log(infoUrlPokemons)
        const pokemons = infoUrlPokemons.map((e)=>e.data)
        // console.log(pokemons)
        const infoPokemons = pokemons.map((e)=>{
            return{
                id: e.id,
                name: e.name,
                hp: e.stats[0].base_stat,
                attack: e.stats[1].base_stat,
                defense: e.stats[2].base_stat,
                speed: e.stats[5].base_stat,
                height: e.height,
                weight: e.weight,
                image: e.sprites.other.home.front_default,
                types: e.types.map((e)=>e.type.name),
            }
        })
        return infoPokemons
}

const infoDb = async () => {
    const dB = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    let dato = JSON.parse(JSON.stringify(dB,null,2))
      dato.forEach(el => el.types = el.types.map(el => el.name))
      return dato

  };
  
  const infoTotal = async () => {
    const infoApiPokemon = await infoApi();
    const infoDataBase = await infoDb();
    const total = infoDataBase.concat(infoApiPokemon);
    return total;
  };

module.exports = {
   infoTotal
  };