export default function validate(pokemon){
    let errors={}
    let reg_exUrl = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
    let reg_exImg = /.*(png|jpg|jpeg|gif)$/;
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   
    if(!pokemon.name){
        errors.name = "Ingrese nombre Pokemon"
    }else if(pokemon.name.length > 15){
        errors.name="No debe superar los 15 caracteres"
    }else if(!regexName.test(pokemon.name)){
        errors.name="Solo se acepta Letras"
    }
    ////////////////////////////////////////
    if(!pokemon.hp){
        errors.hp = "Se requiere Hp"
    }
    else if (!/^([0-9])*$/.test(pokemon.hp)) {
        errors.hp = "Solo numeros enteros"
    }else if(pokemon.hp === "0"){
        errors.hp="0 no puede ser"
    }else if(pokemon.hp > 500){
        errors.hp="No puede ser mas de 500"
    }    
    ////////////////////////////////////
    if(!pokemon.attack){
        errors.attack = "Se requiere Attack"
    }else if (!/^([0-9])*$/.test(pokemon.attack)) {
        errors.attack = "Solo numeros enteros"
    }else if(pokemon.attack === "0"){
        errors.attack="0 no puede ser"
    }else if(pokemon.attack > 500){
        errors.attack="No puede ser mas de 500"
    }    
    ////////////////////////////////////////
    if(!pokemon.defense){
        errors.defense = "Se requiere Defense"
    }else if (!/^([0-9])*$/.test(pokemon.defense)) {
        errors.defense = "Solo numeros enteros"
    }else if(pokemon.defense === "0"){
        errors.defense="0 no puede ser"
    }else if(pokemon.defense > 500){
        errors.defense="No puede ser mas de 500"
    }    
    ////////////////////////////////////////
    if(!pokemon.speed){
        errors.speed = "Se requiere Speed"
    }else if (!/^([0-9])*$/.test(pokemon.speed)) {
        errors.speed = "Solo numeros enteros"
    }else if(pokemon.speed === "0"){
        errors.speed="0 no puede ser"
    }else if(pokemon.speed > 500){
        errors.speed="No puede ser mas de 500"
    }    
//////////////////////////////////////////////////
    if(!pokemon.height){
        errors.height = "Se requiere Height"
    }else if (!/^([0-9])*$/.test(pokemon.height)) {
        errors.height = "Solo numeros enteros"
    }else if(pokemon.height === "0"){
        errors.height="0 no puede ser"
    }else if(pokemon.height > 500){
        errors.height="No puede ser mas de 500"
    }    
//////////////////////////////////////    
    if(!pokemon.weight){
        errors.weight = "Se requiere Weight"
    }else if (!/^([0-9])*$/.test(pokemon.weight)) {
        errors.weight = "Solo numeros enteros"
    }else if(pokemon.weight === "0"){
        errors.weight="0 no puede ser"
    }else if(pokemon.weight > 500){
        errors.weight="No puede ser mas de 500"
    }    
 /////////////////////////////////////////   
   
    if(!reg_exUrl.test(pokemon.image)){
        errors.image="No se detecta una Url"
    }else if(reg_exUrl.test(pokemon.image)){
        if(!reg_exImg.test(pokemon.image)){
            errors.image="Debe ser png|jpg|jpeg|gif"
        }}

   
    return errors

}

