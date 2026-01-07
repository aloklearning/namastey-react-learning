import { Suspense } from 'react';
import Shimmer from '../components/Shimmer';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import CategoryItem from '../components/CategoryItem';

const CartPage = () => {
  /**
   * Only subscribe to the necessary slice, and not the whole store
   * This is efficient, as the app grows, you don't need to bother
   * or be bothered about what other slices in the store are doing
   */
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());

  return (
    <Suspense fallback={<Shimmer />}>
      <div className='text-center m-4 p-4'>
        <h1 className='font-bold text-2xl'>Cart</h1>
        <button
          onClick={handleClearCart}
          className='bg-gray-800 rounded-lg text-white p-2 m-2 cursor-pointer'
        >
          Clear Cart
        </button>
      </div>

      <div className='text-center w-6/12 m-auto'>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CategoryItem key={item?.card?.info?.id} categoryItem={item} />
            ))}
          </>
        ) : (
          <h2 className='font-bold text-xl text-red-400'>
            Cart is Empty! Please add something.
          </h2>
        )}
      </div>
    </Suspense>
  );
};

export default CartPage;
