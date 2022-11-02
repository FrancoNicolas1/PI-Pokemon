const {Router}= require("express")
const axios= require("axios")
const {Pokemon, Type}= require("../db")

// const { infoTotal}= require("../controlers")
// const {Pokemon, Type}= require("../db")
const router= Router()

router.get("/", async(req,res)=>{
  try {
    const infoApiTypes= await axios.get("https://pokeapi.co/api/v2/type")
    const typesPokemon= infoApiTypes.data.results.map((type)=> type.name)
    typesPokemon.forEach((e) => {
      Type.findOrCreate({
        where: { name: e },
      });
    });
    const typesTotal = await Type.findAll();
    res.status(200).json(typesTotal)
} catch (error) {
    res.status(401).json({error :"Problemas obteniendo los Tipos de pokemon"})  
}
})




module.exports = router;