import './App.css';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Card from './Card';
import data from './Data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart'
import { useState } from 'react';

function App() {

  const [cartData, setCartData] = useState([])

  const handleCartData = (product) => {
    console.log(product)
    setCartData((cartData) => [...cartData, { data: product, quantity: 1 }])
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Carousel />
        <Routes>
          <Route exact path="/" element={<Card data={data} handleCartData={handleCartData} />} />
          <Route exact path="/cart" element={<Cart data={cartData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
