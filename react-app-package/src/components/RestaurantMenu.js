import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // This destructured constant value is the name which you
  // have defined in the config of useBrowserRouter in App.js
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (!resMenu) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;

  // Handling inconsitenties in the API using Nullish coalescing
  // Nullish coalescing is better when left side data is coming
  // as null or undefined and you want the machine to print the right data
  const menuItems =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ??
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {/* || operator being used, as it prints the right side data if the left operand 
            is falsy, like 0, "", NaN, false */}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
