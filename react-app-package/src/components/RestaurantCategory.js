import { useState } from 'react';
import CategoryItem from './CategoryItem';

const RestaurantCategory = ({ menuItem }) => {
  const itemCard = menuItem?.card?.card;
  const [toggleItem, setToggleItem] = useState(false);

  const handleToggle = () => setToggleItem(!toggleItem);

  return (
    <div className='shadow-lg p-5 mx-auto my-6 w-6/12 rounded-md bg-gray-100'>
      <div
        onClick={handleToggle}
        className='flex justify-between cursor-pointer'
      >
        <span className='font-semibold'>
          {itemCard?.title} ({itemCard?.itemCards?.length})
        </span>
        <span>{toggleItem ? '⬆️' : '⬇️'}</span>
      </div>

      {/* Items */}
      {toggleItem &&
        itemCard?.itemCards?.map((card) => (
          <CategoryItem key={card?.card?.info?.id} categoryItem={card} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
