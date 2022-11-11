const {Router}= require("express")
const axios= require("axios")
const {infoTotal} = require("../controlers")

const router= Router()

router.get("/", async (req,res)=>{
    try {
    const allApi= await infoTotal()
    const {orderAzZa} = req.query
    const {orderAttack}= req.query

    if(orderAzZa){ 
        const orderAll= orderAzZa === "ASC"?
        allApi.sort((a,b)=>a.name.localeCompare(b.name))
        :allApi.sort((a,b)=>b.name.localeCompare(a.name))
        res.status(200).json(orderAll)
    }else if(orderAttack){
        const order= orderAttack === "filtro"?
        // res.send("se mando query")
         allApi.filter((e)=> e.attack > 50)
         : res.send("manda algo")
        res.json(order)
    }
       else{
        res.send("No se mando nada")
       }
} catch (error) {
    console.log(error)       
}   
})



module.exports=router