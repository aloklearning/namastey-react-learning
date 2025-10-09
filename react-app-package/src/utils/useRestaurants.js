import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const useRestaurants = (setFilteredRestaurants) => {
  const [error, setError] = useState("");
  const [resLists, setResLists] = useState([]);

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

  return { error, resLists };
};

export default useRestaurants;
