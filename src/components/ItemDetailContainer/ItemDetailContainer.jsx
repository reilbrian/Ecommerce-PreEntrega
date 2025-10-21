import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContaner =()=>{
    const [detail, setDetail] = useState({});
    const {id} =useParams
    
    useEffect(() =>{
        fetch("/data/prducts.json")
        .then((res) => {
            if(!res.ok){
            throw new Error("error al buscar prodss");  
        }

        return res.json();
        })
        .then((data) => {
            const found = data.find(producto =>producto.id === id)
            if(found){
                setDetail(found);
            }else{
                throw new Error("error al buscar prodss"); 
            }
        })
        .catch(() => {});
    }, [id]);

    return(
    <main>
        {Object.keys(detail).length ?(
            <ItemDetail detail={detail} />
        ):(
            <p>cargando...</p>
        )}
    </main>
    );

}