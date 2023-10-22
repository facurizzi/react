import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({id}) => {

    const [item , setItem] = useState({})
    
    const getData = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then( response => response.json())
        .then( data => setItem(data))
        .catch( error => console.log(error))
      }    

      useEffect(() => {
        getData()
      },[])
      console.log(item)
    return (
        <ItemDetail item={item}/>
    
    )
}

export default ItemDetailContainer