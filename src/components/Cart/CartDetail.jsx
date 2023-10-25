import React, { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'

const CartDetail = () => {

   const {cart,removeItem} = useContext(CartContext)
  return (
    <div>
        {
            cart.map (el =>(
                <div>
                    <p>{el.item.title}</p>
                    <p>{el.q}</p>
                    <button onClick={()=> removeItem(el.item.id)}>ELIMINAR</button>
                </div>

            ))

        }
        

    </div>
  )
}

export default CartDetail