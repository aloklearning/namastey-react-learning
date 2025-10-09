import { useState } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

/**
 ** IMPORTANT *
 * Whenever state variable updates, React triggers
 * reconcilliation cycle (re-renders the component)
 */
const Body = () => {
  const isOnline = useOnlineStatus();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { error, resLists } = useRestaurants(setFilteredRestaurants);

  const filterRestaurants = () => {
    const filteredRestaurants = resLists.filter((res) =>
      res?.info?.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  if (!isOnline) {
    return (
      <h1>
        Looks like you're offline! Please check your connection and try again;
      </h1>
    );
  }

  if (error) {
    return <h1 style={{ color: "red" }}>{error}</h1>;
  }

  return resLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div style={{ padding: "10px" }}>
      <div className="search-filter-container">
        <div className="search">
          <input
            type="text"
            value={searchText}
            className="search-box"
            style={{ width: "15rem" }}
            placeholder="Type something here"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            style={{ marginInlineStart: "10px" }}
            onClick={filterRestaurants}>
            Search
          </button>
        </div>
        <button
          style={{ marginInlineStart: "10px" }}
          onClick={() => {
            setResLists((res) =>
              res.filter((item) => item.info.avgRating >= 4.5)
            );
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
