import './styles/Home.scss';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='home'>
      <h1>Home</h1>
      <Link to='/product'>Go to Product page</Link>
    </main>
  );
};

export default Home;
