import React from "react";
import Counter from "../Counter/Counter";


const ItemDetail = ( {item,onAdd}) => {

    return (
        <div>
            <h5>{item.title}</h5>
            <img src={item.image}/>
            <p>
              Description:  {item.description}
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