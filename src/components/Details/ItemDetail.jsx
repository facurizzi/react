import React from "react";
import Counter from "../Counter/Counter";


const ItemDetail = ( {item,onAdd}) => {

    return (
        <div className="{styles.contianer}">
            <h5 className="{styles.title}">{item.name}</h5>
           <img src={item.image}/>
            <p>
              Stock:  {item.stock}
            </p>
            <p>
              Price:  {item.price}
            </p>
            <p>
             Category:   {item.category}
            </p>
            <Counter onAdd={onAdd} />
        </div>
    
    )
}

export default ItemDetail