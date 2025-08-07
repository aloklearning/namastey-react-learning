import { useState } from "react";

import restaurants from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [search, setSearch] = useState("");
  const [resLists, setResLists] = useState(restaurants);

  return (
    <div style={{ padding: "10px" }}>
      <div className="search-filter-container">
        <input
          type="text"
          value={search}
          style={{ width: "15rem" }}
          placeholder="Type something here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{ marginInlineStart: "10px" }}
          onClick={() => {
            console.log(search);
            setResLists((res) =>
              res.filter((item) => item.info.avgRating >= 4.5)
            );
          }}>
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
