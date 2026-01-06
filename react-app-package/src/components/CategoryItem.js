import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../redux/cartSlice';

const CategoryItem = ({ categoryItem }) => {
  const itemInfo = categoryItem?.card?.info;

  // Dispatch the event to trigger reducer function
  const dispatch = useDispatch();
  const handleAddItem = () => {
    // Calling the reducer function to make changes to the slice store
    dispatch(addItem(itemInfo?.name));
  };

  return (
    <div className='text-left border-gray-300 border-b-2 my-7 pb-7 flex justify-between'>
      <div className='w-10/12'>
        <p className=' text-lg font-semibold text-gray-700'>{itemInfo?.name}</p>
        <p>
          ₹{itemInfo.price ? itemInfo.price / 100 : itemInfo.defaultPrice / 100}
        </p>
        <p className='mt-3 text-gray-500'>{itemInfo.description}</p>
      </div>

      <div className='w-2/12 relative'>
        <div className='absolute bg-white text-green-600 rounded-md py-1 px-3 border-gray-300 shadow-lg mx-10 -bottom-3'>
          <button className='cursor-pointer' onClick={handleAddItem}>
            Add
          </button>
        </div>

        <img className='h-24 rounded-md' src={CDN_URL + itemInfo?.imageId} />
      </div>
    </div>
  );
};

export default CategoryItem;
