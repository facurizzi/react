import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import CartContext from "../../context/cartContext/CartContext";


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
    

      const {addItem} = useContext(CartContext)
      

      const onAdd =(q)=>{
        addItem(item,q)
      }
    return (
      <>
      item!==null && 
      <ItemDetail item={item} onAdd={onAdd} />
      </>
        
    
    )
}

export default ItemDetailContainer