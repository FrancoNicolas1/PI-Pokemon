const {Router}= require("express")
const { infoTotal}= require("../controlers")
const {Pokemon, Type}= require("../db")
const router= Router()

router.get("/", async(req,res)=>{
    try {
    const {name}= req.query
    const info = await infoTotal()
      
        if(name){
            const searchPoke=info.filter((pokemon)=>pokemon.name.toLowerCase().includes(name.toLowerCase()))
            searchPoke.length?
            res.status(200).json(searchPoke)
            :res.status(400).send("No se encontro ese pokemon")   
        }
        else{
        res.status(200).json(info)
        }

        } catch (error) {
          res.status(401).json({error :"Problemas obteniendo Todos los Pokemon / Back"})  
        }
})

router.get("/:id", async (req,res)=>{
    try {
    const {id} = req.params
    const info = await infoTotal()
    if(id){
        const pokeId= info.filter((pokemon)=> pokemon.id == id)
        pokeId.length
        ?res.status(200).json(pokeId)
        :res.status(400).json("Nose encontro el id del Pokemon ")
    }
} catch (error) {
    res.status(401).json({error :"Problemas obteniendo el Id de un Pokemon / Back"})  
}
})

router.post("/" ,async(req,res)=>{
    try {
        
    const {
        name,
        hp,
        attack,
        defense,
        speed,
        weight,
        height,
        image,
        types
        }= req.body

    let newPokemon= await Pokemon.create({
        name,
         hp ,
         attack 
         ,defense 
         ,speed 
         ,weight 
         ,height
          ,image
        })
        let tipoDb = await Type.findAll({
            where: {
                name: types
            }
        }) 
        newPokemon.addType(tipoDb)
        res.json(newPokemon)
    } catch (error) {
        res.status(401).json({error :"Problemas creando Pokemon / Back"})  
    }
})

router.delete("/:id", async(req,res)=>{

    const {id}=req.params
    if(!id){
        res.send("debe ingresar un id ")
    }
    else{
        await Pokemon.destroy({
            where:{
                id
            }
        })
        res.send("pokemon eliminado")
    }
})

module.exports = router;