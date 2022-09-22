import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client'
import { ClientToServerEvents, ServerToClientEvents } from '../interfaces'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type AddProductProps = {
  socket: Socket<ClientToServerEvents, ServerToClientEvents>
}


const AddProduct = ({ socket }: AddProductProps) => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, price, owner: localStorage.getItem('userName') });
    navigate('/products');
  };
  return (
    <>
      <Container>
        <h2>Add a new product</h2>
        <Form className="addProduct__form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name of the product</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="price">Starting price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            required
          />

          <button className="addProduct__cta">SEND</button>
        </Form>
      </Container>
    </>
  )
}

export default AddProduct
