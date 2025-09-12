import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";

/**
 ** IMPORTANT *
 * Whenever state variable updates, React triggers
 * reconcilliation cycle (re-renders the component)
 */
const Body = () => {
  const [error, setError] = useState("");
  const [resLists, setResLists] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  /**
   * When the dependency array is empty, useEffect will only be called once after the render
   * When the dependency array is filled, it will re-render every time that value inside dependency
   * array changes
   */
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const jsonData = await data.json();

      const restaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResLists(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      setError(error.message);
    }
  };

  const filterRestaurants = () => {
    const filteredRestaurants = resLists.filter((res) =>
      res?.info?.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

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
