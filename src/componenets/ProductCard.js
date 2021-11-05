import './styles/ProductCard.scss';

const ProductCard = ({ product }) => {
  const { image, title, price, oldPrice, discount, brand, rating, pickup } =
    product;

  const showNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.trunc(rating))
      stars.push(<img key={i} src='./images/star_filled.svg' alt='star' />);
    else stars.push(<img key={i} src='./images/star_stroke.svg' alt='star' />);
  }

  return (
    <div className='card'>
      <div className='card_image'>
        <img src={image} alt='product' className='main_image' />
        <div className='wrapper_360'>
          <img src='./images/360.svg' alt='360 preview' />
        </div>
      </div>
      <div className='card_info'>
        <h4>{title}</h4>
        <div className='price_logo'>
          <div className='price'>
            <strong className='current_price'>
              {showNumberWithCommas(price)} LE
            </strong>
            {oldPrice && (
              <span className='old_price'>
                {showNumberWithCommas(oldPrice)} LE
              </span>
            )}
            {discount && <span className='discount'>{discount} %</span>}
          </div>
          <img src={brand} alt='adidas' className='brand_logo' />
        </div>
        <div className='rating'>
          <span className='stars'>{stars}</span>
          <strong>{rating} of 5</strong>
        </div>
        <div className='pickup'>
          Pickup From: <strong>{pickup}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
