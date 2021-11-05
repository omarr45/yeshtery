import './styles/SimilarProducts.scss';

import ProductCard from './ProductCard';
import adidas from '../images/adidas.svg';
import prev1 from '../images/preview_1.png';
import prev2 from '../images/preview_2.png';
import prev3 from '../images/preview_3.png';
import prev4 from '../images/preview_4.png';

const SimilarProducts = () => {
  const products = [
    {
      id: 1,
      image: prev1,
      title: 'Product 1 Lorem ipsum dolor sit amet consectetur elit.',
      price: 9999,
      oldPrice: 10999,
      discount: 50,
      brand: adidas,
      rating: 4.2,
      pickup: 'Genena Mall',
    },
    {
      id: 2,
      image: prev2,
      title: 'Product 2 Lorem ipsum dolor sit amet consectetur elit.',
      price: 9999,
      brand: adidas,
      rating: 3.2,
      pickup: 'City Stars',
    },
    {
      id: 3,
      image: prev3,
      title: 'Product 3 Lorem ipsum dolor sit amet consectetur elit.',
      price: 9999,
      oldPrice: 10999,
      discount: 30,
      brand: adidas,
      rating: 2.7,
      pickup: 'City Center',
    },
    {
      id: 4,
      image: prev4,
      title: 'Product 4 Lorem ipsum dolor sit amet consectetur elit.',
      price: 9999,
      oldPrice: 10999,
      discount: 70,
      brand: adidas,
      rating: 4.2,
      pickup: 'Eastern Market',
    },
    {
      id: 5,
      image: prev1,
      title: 'Product 5 Lorem ipsum dolor sit amet consectetur elit.',
      price: 9999,
      oldPrice: 10999,
      discount: 50,
      brand: adidas,
      rating: 4.6,
      pickup: 'Genena Mall',
    },
    {
      id: 6,
      image: prev2,
      title: 'Product 6 Lorem ipsum dolor sit amet consectetur elit.',
      price: 9999,
      brand: adidas,
      rating: 3.2,
      pickup: 'Abbas El-Akad',
    },
  ];

  return (
    <section className='similar_products'>
      <h2>Similar Products</h2>
      <p>You may also like these products</p>
      <div className='scrollable'>
        <div className='cards_grid'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
