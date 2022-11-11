import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { orderAlfabeticBack, orderAtack } from "../Redux/actions";
export default function Back(){
    const dispatch=useDispatch()
    const testBack=useSelector((state)=>state.testBack)
    console.log(testBack)

    const hadleChange=(e)=>{
        // console.log(e.target.value)
        e.preventDefault()
        dispatch(orderAlfabeticBack(e.target.value))
    }

    const handleChange=(e)=>{
        e.preventDefault()
        dispatch(orderAtack(e.target.value))
    }
    return(
    <>
    <h1>HOLAAAA</h1>
    <select onChange={hadleChange}>
        <option value="ASC">ASC</option>
        <option value="DES">DES</option>
    </select>
    <button onClick={handleChange}>Mayor de 50 atack</button>
    </>)
}