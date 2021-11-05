import './styles/Navbar.scss';

import { useContext, useEffect, useState } from 'react';

import { CartContext } from '../services/CartContext';
import CartItem from './CartItem';
import EscapeOutside from 'react-escape-outside';
import { Link } from 'react-router-dom';
import adidas from '../images/adidas.svg';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCart = () => {
    setShowCart(!showCart);
  };

  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);

  const calcTotal = () => {
    let t = 0,
      i = 0;
    cart.forEach((item) => {
      t += item.price * item.quantity;
      i += item.quantity;
    });
    setItems(i);
    setTotal(t);
  };

  const showNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    calcTotal();
  }, [cart]);

  return (
    <header>
      <nav className='nav nav_yellow'>
        <div className='content flex'>
          <div className='flex'>
            <img src='./images/burger.svg' alt='burger menu' />
            <Link to='/' className='logo'>
              <img src='./images/yeshtery.svg' alt='yeshtery logo' />
            </Link>
          </div>
          <div className='offer'>
            <img src='./images/left_arrow.svg' alt='left arrow' />
            <p>Valentine's Day Offer! Buy Two Get One Free</p>
            <span>Shop Now</span>
            <img src='./images/right_arrow.svg' alt='right arrow' />
          </div>
          <div className='nav_yellow_links'>
            <span>
              <img src='./images/contact.svg' alt='contact us' />
              <h4>Contact Us</h4>
            </span>
            <span>
              <img src='./images/track.svg' alt='track order' />
              <h4>Track Order</h4>
            </span>
            <span>
              <img src='./images/store.svg' alt='find a store' />
              <h4>Find A Store</h4>
            </span>
          </div>
        </div>
      </nav>
      <nav className='nav nav_white'>
        <div className='content flex'>
          <div className='search_box'>
            <img
              src='./images/search.svg'
              alt='search icon'
              className='search_icon'
            />
            <input
              type='text'
              name='search'
              className='search'
              placeholder='Search'
            />
          </div>
          <img src={adidas} alt='adidas logo' className='brand_logo' />
          <div className='nav_white_links'>
            <span style={{ position: 'relative' }} onClick={handleCart}>
              <img src='./images/cart.svg' alt='cart' />
              <h4>Cart</h4>
              <span className='cart_number'>{items}</span>
            </span>
            <span>
              <img src='./images/wishlist.svg' alt='wishlist' />
              <h4>Wishlist</h4>
            </span>
            <span>
              <img src='./images/profile.svg' alt='login' />
              <h4>Login</h4>
            </span>
          </div>
        </div>
      </nav>
      <nav className='nav nav_black'>
        <div className='nav_black_links content'>
          <span>Men</span>
          <span>Women</span>
          <span>Unisex</span>
          <span>Kids</span>
          <span>Best Sellers</span>
          <span>New Arrivals</span>
          <span>Offers</span>
        </div>
      </nav>
      {showCart && (
        <EscapeOutside onEscapeOutside={handleCart}>
          <aside className='cart'>
            <div className='cart_header'>
              <h3>My Cart</h3>
              <img
                src='./images/close.svg'
                alt='close cart'
                className='close_cart'
                onClick={handleCart}
              />
            </div>
            <div className='cart_body'>
              <h4>Cart Summary</h4>
              <p>
                <em style={{ fontSize: '.625rem', paddingTop: '1rem' }}>
                  You can click outside the cart or press escape to close it
                </em>
              </p>
              <div className='items'>
                {cart.length > 0 &&
                  cart.map((item, index) => (
                    <div className='cart_item' key={index}>
                      <CartItem product={item} />
                    </div>
                  ))}
                {cart.length === 0 && (
                  <h4
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid black',
                    }}>
                    Your cart is empty
                  </h4>
                )}
              </div>
              <h3 className='total'>Total: {showNumberWithCommas(total)} LE</h3>
              <div className='buttons'>
                <button className='continue'>Continue Shopping</button>
                <button className='checkout'>Checkout</button>
              </div>
            </div>
          </aside>
        </EscapeOutside>
      )}
    </header>
  );
};

export default Navbar;
