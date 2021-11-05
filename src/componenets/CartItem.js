import './styles/CartItem.scss';

const CartItem = ({ product }) => {
  const { id, mainImage, title, price, quantity } = product;
  const showNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className='card_item'>
      <img src={mainImage} alt={title} className='card_item_image' />
      <div className='card_item_info'>
        <h4 className='title'>{title}</h4>
        <h5 className='quantity'>Quantity: {quantity}</h5>
        <p className='price'>{showNumberWithCommas(price)} LE</p>
      </div>
      <button className='button'>Remove</button>
    </div>
  );
};

export default CartItem;
