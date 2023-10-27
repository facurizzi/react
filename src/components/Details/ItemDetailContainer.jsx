import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import CartContext from "../../context/cartContext/CartContext";
import {doc,getDoc,getFirestore} from "firebase/firestore";


const ItemDetailContainer = ({id}) => {
  const [item , setItem] = useState(null)
/*
    const getData = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then( response => response.json())
        .then( data => setItem(data))
        .catch( error => console.log(error))
      }    

      useEffect(() => {
        getData()
      },[])
 
*/
const onAdd =(q)=>{
  addItem(item,q)
}
const {addItem} = useContext(CartContext)

useEffect(( ) => {
  const db=getFirestore()
  

  const itemRef = doc(db,"items",id)

  getDoc(itemRef)
    .then((snapshot)=> {
      console.log(snapshot.exists())
      if(snapshot.exists()){

        setItem({
          id: snapshot.id,
          ...snapshot.data()
        })
      }
    })
    .catch((err)=>console.log(err))
  

},[])

console.log(item)
      

     
    return (
      <>
      {
      item!==null && 
      <ItemDetail item={item} onAdd={onAdd} />
      }
      </>
      
    
    )
}

export default ItemDetailContainer