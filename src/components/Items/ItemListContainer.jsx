import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';


const ItemListContainer = ({ greeting }) => {

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
  return (
    <Container>
      <Row>
        <ItemList items={items}/>
      </Row>
        <h1>{greeting}</h1>
        <p >Bienvenido a nuestra tienda en línea.</p>
    </Container>
  );
};

export default ItemListContainer;
