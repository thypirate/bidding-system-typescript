import io from 'socket.io-client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavComponent from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import BidProduct from './components/BidProduct'
import { ChakraProvider } from '@chakra-ui/react'

const socket = io('http://localhost:4000');

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Router>
          <NavComponent socket={socket} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/add"
              element={<AddProduct socket={socket} />}
            />
            <Route
              path="/products/bid/:name/:price"
              element={<BidProduct socket={socket} />}
            />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
