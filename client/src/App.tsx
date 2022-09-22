import io from 'socket.io-client';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavComponent from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import BidProduct from './components/BidProduct'
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io('http://localhost:4000');

const App = () => {
  return (
    <>
      <Router>
        <div>
          {/* Nav is available at the top of all the pages as a navigation bar */}
          <NavComponent socket={socket} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/add"
              element={<AddProduct socket={socket} />}
            />
            {/* Uses dynamic routing */}
            <Route
              path="/products/bid/:name/:price"
              element={<BidProduct socket={socket} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
