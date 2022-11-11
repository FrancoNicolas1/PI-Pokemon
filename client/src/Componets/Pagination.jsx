
import React from "react";
import pagination from "../css/Pagination.module.css"

export default function Pagination({pokemonForPage,pokemons,pag,currentPage}){
    const pageNumbers=[]
    for(let i=1; i<=Math.ceil(pokemons / pokemonForPage); i++){
        pageNumbers.push(i)
    }
    const prevHandler=()=>{
        if(currentPage <= 1) return
        pag(currentPage -1)
    }
    const nextHandler=()=>{
        if(currentPage >= pageNumbers.length) return
        pag(currentPage + 1)
    }

    return(
        <div className={pagination.container}>
            {pageNumbers.length === 1?
            (<div>
              {pageNumbers?.map((number)=>(
                  <button className={number === currentPage? pagination.bu:pagination.button} key={number} onClick={()=> pag(number)}>
                      {number}
                  </button>
              )
              )}
            </div>):
            <div>
                 <button className={pagination.button} onClick={prevHandler}>prev</button>
                {pageNumbers?.map((number)=>(
                    <button className={number === currentPage? pagination.bu:pagination.button} key={number} onClick={()=> pag(number)}>
                        {number}
                    </button>
                )
                )}

        <button className={pagination.button} onClick={nextHandler}>next</button>
            </div>
            
            }
        </div>
    )}