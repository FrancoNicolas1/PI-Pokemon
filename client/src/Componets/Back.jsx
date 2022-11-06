import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { orderAlfabeticBack } from "../Redux/actions";
export default function Back(){
    const dispatch=useDispatch()
    const testBack=useSelector((state)=>state.testBack)
    console.log(testBack)

    const hadleChange=(e)=>{
        // console.log(e.target.value)
        e.preventDefault()
        dispatch(orderAlfabeticBack(e.target.value))
    }


    return(
    <>
    <h1>HOLAAAA</h1>
    <select onChange={hadleChange}>
        <option value="ASC">ASC</option>
        <option value="DES">DES</option>
    </select>
    
    </>)
}