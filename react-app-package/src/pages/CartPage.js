import { Suspense } from 'react';
import Shimmer from '../components/Shimmer';

const CartPage = () => {
  return (
    <Suspense fallback={<Shimmer />}>
      <h1>This is a cart page.</h1>
    </Suspense>
  );
};

export default CartPage;
