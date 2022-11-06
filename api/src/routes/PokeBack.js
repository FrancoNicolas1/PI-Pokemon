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
        const orderAtt= orderAttack === "MIN"?
        allApi.sort((a,b)=>a.attack - b.attack)
        :allApi.sort((a,b)=>b.attack - a.attack)
        res.status(200).json(orderAtt)
    }
       else{
        res.send("No se mando nada")
       }
} catch (error) {
    console.log(error)       
}   
})

router.get("/a", async(req,res)=>{
    const {order}=req.query
    try {
    if(order === "a")    
    res.send("llegaste a la otra rutas")
} catch (error) {
    console.log(error)       
}
})

module.exports=router