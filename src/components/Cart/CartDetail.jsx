import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import styles from './style.module.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const CartDetail = () => {

    const [orderId, setOrderId] = useState("")
   const {cart,removeItem,clear} = useContext(CartContext)
   
   const navigate = useNavigate()

   const addToCart = () => {
    const purchase = {
        buyer:{
            id:1,
            name:"facu"
        },
        items: cart,
        date: new Date(),
        total: 1000
    };
    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, purchase)
        // .then(res=> Swal.fire("Gracias por su compra" + res.id))
        .then(res=> navigate(`/checkout/${res.id}`))
        .catch(err=> console.log(err))


    clear();
   }

  return (
    <div>
        CART
        {
            cart.map(el =>(
                <div className={styles.container} key={el.id}>
                    <div className={styles.cardBody}>
                        <p>Product: {el.name}</p>
                        <p>Cantidad: {el.quantity}</p>
                    </div>
                    <img src={el.image} styles={styles.image} />
                    
                    <button className='btn btn-primary' onClick={()=> removeItem(el.id)}>ELIMINAR</button>
                </div>

            ))

        }
        {
            cart.length>0 &&
            <button className='btn btn-primary' onClick={addToCart}>create order</button>

        }
        {
            orderId && <span>Order Created: {orderId}</span>
        }
        
    </div>
  )
}

export default CartDetail