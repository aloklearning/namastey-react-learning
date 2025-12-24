import { useState } from 'react';
import { useParams } from 'react-router';
import Shimmer from '../components/Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from '../components/RestaurantCategory';

const RestaurantMenuPage = () => {
  // This destructured constant value is the name which you
  // have defined in the config of useBrowserRouter in App.js
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [activeItem, setActiveItem] = useState(null);

  if (!resMenu) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;

  // Handling inconsitenties in the API using Nullish coalescing
  // Nullish coalescing is better when left side data is coming
  // as null or undefined and you want the machine to print the right data
  const menuItems =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => Object.keys(card).length > 0
    );

  return (
    <div className='text-center m-6'>
      <h1 className='text-xl font-bold'>{name}</h1>
      <p className='text-lg font-bold'>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>

      {/* Accordion */}
      {menuItems.map((item) => (
        <RestaurantCategory
          menuItem={item}
          key={item?.card?.card?.title}
          currentActiveItem={activeItem}
          setCurrentActiveItem={setActiveItem}
        />
      ))}
    </div>
  );
};

export default RestaurantMenuPage;
