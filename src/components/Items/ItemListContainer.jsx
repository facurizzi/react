import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore"


const ItemListContainer = ({category}) => {
  const [items, setItems] = useState([])

useEffect( () => {
  const db =getFirestore()

  const itemCollection = collection(db,"items")
  // const q = query(itemCollection)
  
  // Define una consulta que filtre por la categoría
  
  const q = query(itemCollection, where("category", "==", category));
  // Define una consulta que filtre por la categoría solo si la categoría está presente

   getDocs(q)
    .then(snapshot => {
      const allData =snapshot.docs.map(document => ({id: document.id, ...document.data()}))
      setItems(allData)
       .catch((error) => {
        console.error("Error fetching data:", error);
       });
      
     })
  },[category])

  return (
    <Container>
      <Row>
        {
          items.length > 0 && 
        <ItemList items={items} />
        }
      </Row>
        
    </Container>
  );
};

export default ItemListContainer;
