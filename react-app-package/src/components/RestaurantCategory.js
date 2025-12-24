import CategoryItem from './CategoryItem';

const RestaurantCategory = ({
  menuItem,
  currentActiveItem,
  setCurrentActiveItem,
}) => {
  const itemCard = menuItem?.card?.card;
  const isActive = currentActiveItem === itemCard?.title;

  // This handles the case of selecting 1 item at a time
  // Also, if current item is open, then be able to close it
  const handleToggle = () => {
    if (isActive) {
      setCurrentActiveItem(null);
      return;
    }

    setCurrentActiveItem(itemCard?.title);
  };

  return (
    <div className='shadow-lg p-5 mx-auto my-6 w-6/12 rounded-md bg-gray-100'>
      <div
        onClick={handleToggle}
        className='flex justify-between cursor-pointer'
      >
        <span className='font-semibold'>
          {itemCard?.title} ({itemCard?.itemCards?.length})
        </span>
        <span>{isActive ? '⬆️' : '⬇️'}</span>
      </div>

      {/* Items */}
      {isActive &&
        itemCard?.itemCards?.map((card) => (
          <CategoryItem key={card?.card?.info?.id} categoryItem={card} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
