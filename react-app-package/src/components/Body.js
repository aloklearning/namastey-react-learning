import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

/**
 ** IMPORTANT *
 * Whenever state variable updates, React triggers
 * reconcilliation cycle (re-renders the component)
 */
const Body = () => {
  const [resLists, setResLists] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9068684&lng=77.6635175&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResLists(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const filterRestaurants = () => {
    const filteredRestaurants = resLists.filter((res) =>
      res?.info?.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

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
