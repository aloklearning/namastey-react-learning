import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [search, setSearch] = useState("");
  const [resLists, setResLists] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9068684&lng=77.6635175&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();

      setResLists(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };

    fetchRestaurants();
  }, []);

  if (resLists.length === 0) {
    return <Shimmer />;
  }

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
