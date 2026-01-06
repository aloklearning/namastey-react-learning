import { useState } from 'react';
import { Link } from 'react-router';

import { LOGO_URL } from '../utils/constants';
import { userContext } from '../contexts/userContext';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

const Header = () => {
  const isOnline = useOnlineStatus();
  const [btnName, setBtnName] = useState('Login');

  const { loggedInUser } = userContext();

  // Subscribing to the defined store via Selector
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='header flex justify-between bg-pink-100 shadow-lg'>
      <div className='logo-container'>
        <img className='w-25' src={LOGO_URL} />
      </div>
      <div className='nav-items flex items-center-safe'>
        <ul className='flex'>
          <li className='px-4'>Online Status: {isOnline ? '🟢' : '🔴'}</li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4 font-bold'>
            <Link to='/cart'>Cart - {cartItems.length} Items</Link>
          </li>
          <button
            className='px-4 cursor-pointer'
            onClick={() =>
              setBtnName((prev) => (prev === 'Login' ? 'Logout' : 'Login'))
            }
          >
            {btnName}
          </button>
          <li className='px-4'>
            <span className='font-bold'>{loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
