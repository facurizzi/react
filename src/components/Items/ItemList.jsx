import React from "react";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";

const ItemList = ({items}) => {
    return (
        <>
        {
            items.map( (item) => (
                <Col md={4} lg={3} key={item.id}>
                    <CardList item={item} />

                </Col>
            ))
        }
        </>
    )
}

const CardList = ({item}) => {
    return (
        <Card style={{ width: '18rem' }} className='mb-3'>
          {/*<Card.Img variant="top" src={item.image} style={{height:'40%'}}/>*/}
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Stock :{item.stock}
            </Card.Text>
            <Card.Text>
              Precio :{item.price}
            </Card.Text>
            <Link to={`/Detail/${item.id}`}>
            <Button variant="primary">Ver detalles</Button>
            </Link>
          </Card.Body>
          <Counter />
        </Card>
      );
}
export default ItemList