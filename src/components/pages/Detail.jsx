import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../Details/ItemDetailContainer'

const Detail = () => {
  const {id} = useParams()
  return (
    <div>
        Detail
        <ItemDetailContainer  id={id}/>

    </div>
  )
}

export default Detail