import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
/*
  const[items, setItems] = useState([])

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
    .then( response => response.json())
    .then( data => setItems(data))
    .catch( error => console.log(error))

  }

  useEffect( () => {
    getData()

  }, [])
  console.log(items)
  */


useEffect( () => {
  const db =getFirestore()

  const itemCollection = collection(db,"items")
  const q = query(itemCollection,where("price","<",1000))

  getDocs(q)
    .then(snapshot => {
      const allData =snapshot.docs.map(document => ({id: document.id, ...document.data()}))
      setItems(allData)
      
    })
},[])

  return (
    <Container>
      <Row>
        {
          items.length > 0 && 
        <ItemList items={items} />
        }
      </Row>
        <h1>{greeting}</h1>
        <p >Bienvenido a nuestra tienda en línea.</p>
    </Container>
  );
};

export default ItemListContainer;
