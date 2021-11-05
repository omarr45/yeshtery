import './App.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { CartContext } from './services/CartContext';
import Footer from './componenets/Footer';
import Home from './pages/Home';
import Navbar from './componenets/Navbar';
import ProductPage from './pages/ProductPage';
// Imports for dummy product
import adidas from './images/adidas.svg';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import mainImage from './images/main.png';
import prevBlack from './images/prev_black.png';
import prevRed from './images/prev_red.png';
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);

  const dummyProduct = {
    id: 1,
    mainImage: mainImage,
    images: [image1, image2, image3, image4],
    brand: adidas,
    category: 'Men',
    title:
      'Adidas black t-shirt Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    rating: 4.1,
    nRates: 22,
    price: 9999,
    oldPrice: 10999,
    discount: 30,
    sizes: ['small', 'medium', 'large', ' X large', ' XX large'],
    colors: [
      {
        img: prevBlack,
        name: 'black',
      },
      {
        img: prevRed,
        name: 'red',
      },
    ],
  };

  return (
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route
            path='/product'
            exact
            component={() => <ProductPage product={dummyProduct} />}
          />
        </Switch>
        <Footer />
      </CartContext.Provider>
    </Router>
  );
};

export default App;
