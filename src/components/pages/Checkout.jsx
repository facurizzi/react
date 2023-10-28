import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
  
    const {orderId} = useParams()
    const updateOrder =() =>{
        const db = getFirestore()
        const orderDoc = doc(db,"orders",orderId)

        updateDoc(orderDoc, {total:2000})
        .then(res=> console.log("orden actualizada"))
        .catch(err=> console.log("algo salio mal"))
    }
    return (
    <div>
        Gracias por su compra.
        {orderId}
        <button onClick={updateOrder}>Actualizar orden</button>
    </div>
  )
}

export default Checkout