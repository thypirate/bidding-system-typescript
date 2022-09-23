import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client'
import { ClientToServerEvents } from '../interfaces'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Container,
  Flex,
  Box,
  Button,
  FormHelperText,
  Input
} from '@chakra-ui/react'

type AddProductProps = {
  socket: Socket<ClientToServerEvents>
}

const AddProduct = ({ socket }: AddProductProps) => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log({ name, price, owner: localStorage.getItem('userName') });
    socket.emit('addProduct', {
      name,
      price,
      owner: localStorage.getItem('userName')!.toString(),
    });
    navigate('/products');
  };
  return (
    <>

      <Container mt="10">
        <Box mb={10} fontSize={28} >Add Product</Box>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name of the product</FormLabel>
            <Input onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Starting price</FormLabel>
            <Input type="number" onChange={(e) => setPrice(parseInt(e.target.value))} />
          </FormControl>
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  )
}

export default AddProduct
