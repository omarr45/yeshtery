import './styles/ProductPage.scss';

import { Suspense, lazy, useContext } from 'react';

import { CartContext } from '../services/CartContext';

// import mainImage from '../images/main.png';

const SimilarProducts = lazy(() => import('../componenets/SimilarProducts'));

const ProductPage = ({ product = 'prod' }) => {
  const { cart, setCart } = useContext(CartContext);

  const showNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const {
    mainImage,
    images,
    brand,
    category,
    title,
    rating,
    nRates,
    price,
    oldPrice,
    discount,
    sizes,
    colors,
  } = product;

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.trunc(rating))
      stars.push(<img key={i} src='./images/star_filled.svg' alt='star' />);
    else stars.push(<img key={i} src='./images/star_stroke.svg' alt='star' />);
  }

  return (
    <div className='content product'>
      <section className='flex main_product'>
        <div className='gallery'>
          <div className='main_image'>
            <img src={mainImage} alt='tshirt' />
            <div className='wrapper_360'>
              <img src='./images/360.svg' alt='360 preview' />
            </div>
          </div>
          <div className='gallery_images'>
            <img
              className='arrow'
              src='./images/left_arrow.svg'
              alt='left arrow'
            />
            {images.map((image, index) => (
              <img className='image' src={image} id={index} alt='preview' />
            ))}
            <img
              className='arrow'
              src='./images/right_arrow.svg'
              alt='right arrow'
            />
          </div>
        </div>
        <div className='product_info'>
          <img src={brand} alt='adidas' className='product_info_brand' />
          <h3 className='product_info_title'>{title}</h3>
          <p className='product_info_category'>{category}</p>
          <div className='product_info_rating'>
            <span className='stars'>{stars}</span>
            <strong>{rating} of 5</strong>
            <span className='n_rates'>{nRates} Rates</span>
          </div>
          <div className='product_info_price'>
            <strong className='current_price'>
              {showNumberWithCommas(price)} LE
            </strong>
            <span className='old_price'>
              {showNumberWithCommas(oldPrice)} LE
            </span>
            <span className='discount'>{discount}% Off</span>
          </div>
          <hr />
          <h4>Size</h4>
          <div className='product_info_sizes'>
            {sizes.map((size, index) => (
              <span
                className={index === 2 ? 'active size' : 'size'}
                key={index}>
                {size}
              </span>
            ))}
          </div>
          <hr />
          <h4>Color</h4>
          <div className='product_info_colors'>
            {colors.map((color, index) => (
              <img
                src={color.img}
                alt={color.name}
                title={color.name}
                key={index}
                className={index === 0 && 'active'}
              />
            ))}
          </div>
          <hr />
          <h4>Quantity</h4>
          <div className='product_info_quantity'>
            <button className='minus'>-</button>
            <input type='number' placeholder='1' />
            <button className='plus'>+</button>
          </div>
          <div className='product_info_buttons'>
            <button
              className='add_to_cart'
              onClick={() => {
                let newCart = [...cart],
                  id,
                  found = false;
                cart.forEach((item) => {
                  if (item.id === product.id) {
                    id = item.id;
                    found = true;
                  }
                });
                if (found) {
                  newCart = newCart.filter((item) =>
                    item.id === id ? item.quantity++ : item
                  );
                } else {
                  newCart.push({ ...product, quantity: 1 });
                }
                setCart(newCart);
              }}>
              Add to Cart
            </button>
            <button className='pickup'>Pickup From Store</button>
          </div>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <SimilarProducts />
      </Suspense>
    </div>
  );
};

export default ProductPage;
