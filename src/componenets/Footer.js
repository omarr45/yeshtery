import '../componenets/styles/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='content'>
        <div className='footer_top flex'>
          <div className='footer_left'>
            <img
              src='./images/yeshtery_yellow.svg'
              alt='yeshtery'
              className='logo'
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              praesentium sint architecto rerum adipisci quidem tempora deserunt
              veritatis perferendis vitae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolorem qui eius, itaque deserunt doloribus. Ducimus iusto magnam
              labore hic impedit eligendi saepe eos amet repellendus nostrum
              recusandae adipisci tempore, maiores incidunt tempora! Laborum,
              sint ullam vel fuga ea molestiae quod dolorem, doloremque
              molestias rerum pariatur modi, esse provident itaque.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates voluptate distinctio pariatur laboriosam dolore
            </p>
          </div>
          <div className='footer_right'>
            <h3>Subscribe to our newsletter</h3>
            <div className='newsletter_wrapper'>
              <input
                type='text'
                name='newsletter'
                className='newsletter'
                placeholder='Enter your mail'
              />
              <span>
                Subscribe
                <img src='./images/newsletter.svg' alt='subscribe' />
              </span>
            </div>
            <div className='footer_links flex'>
              <ul className='pages'>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Track Order</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Sell With Us</li>
                <li>Shipping & Returns</li>
              </ul>
              <ul className='social_media'>
                <li>
                  <img src='./images/facebook.svg' alt='facebook' />
                  <p>/YESHTERY</p>
                </li>
                <li>
                  <img src='./images/linkedin.svg' alt='linkedin' />
                  <p>/YESHTERY</p>
                </li>
                <li>
                  <img src='./images/instagram.svg' alt='instagram' />
                  <p>/YESHTERY</p>
                </li>
                <li>
                  <img src='./images/twitter.svg' alt='twitter' />
                  <p>/YESHTERY</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer_bottom flex'>
          <p>&copy; 2021 yeshtery, all rights reserved.</p>
          <div className='payment'>
            <img src='./images/cod.png' alt='Cash On Delivery' />
            <img src='./images/visa.png' alt='Visa' />
            <img src='./images/mastercard.png' alt='mastercard' />
          </div>
          <div className='powered'>
            <p>Powered by</p>
            <img src='./images/nasnav.svg' alt='Nasnav' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
