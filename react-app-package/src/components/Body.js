import { useState } from "react";

import restaurants from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resLists, setResLists] = useState(restaurants);

  return (
    <div style={{ padding: "10px" }}>
      <div className="filter-button">
        <button
          onClick={() =>
            setResLists((res) =>
              res.filter((item) => item.info.avgRating >= 4.5)
            )
          }>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resLists.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
