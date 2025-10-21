import { useState,useEffect } from "react";
import { ItemList } from "../ItemList/Itemlist";

export const ItemListContainer = () =>{
const [products, setProducts]=useState([])

useEffect(()=>{
    fetch("/data/products.json")
    .then((res)=>{
        if(!res.ok){
            throw new Error("error al buscar prodss");  
        }
        return res.json();
    })
    .then((data)=>{
        setProducts(data);
    })
    .catch((err)=>{
        console.log(err);
    });
},[])

    return(
    <section>
        <h1>Bienvenida</h1>
        <ItemList lista={products}/>
    </section>
    );
};