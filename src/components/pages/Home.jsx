import React from 'react'
import ItemListContainer from '../Items/ItemListContainer'
import { useParams } from 'react-router-dom'

const Home = () => {
  const category = useParams()
  return (
    <div>
      <ItemListContainer category={category}/>
    </div>
  )
}

export default Home