import { useState } from 'react';

import Shimmer from '../components/Shimmer';
import useRestaurants from '../utils/useRestaurants';
import { userContext } from '../contexts/userContext';
import useOnlineStatus from '../utils/useOnlineStatus';
import RestaurantCard, { withVegLabel } from '../components/RestaurantCard';

/**
 ** IMPORTANT *
 * Whenever state variable updates, React triggers
 * reconcilliation cycle (re-renders the component)
 */
const HomePage = () => {
  const isOnline = useOnlineStatus();
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { error, resLists } = useRestaurants(setFilteredRestaurants);

  const { loggedInUser, setUserName } = userContext();
  const handleTextChange = (e) => {
    setUserName(e.target.value);
  };

  const filterRestaurants = () => {
    const filteredRestaurants = resLists.filter((res) =>
      res?.info?.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const RestaurantsWithVegLabel = withVegLabel(RestaurantCard);

  if (!isOnline) {
    return (
      <h1>
        Looks like you're offline! Please check your connection and try again;
      </h1>
    );
  }

  if (error) {
    return <h1 style={{ color: 'red' }}>{error}</h1>;
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div style={{ padding: '10px' }}>
      <div className='search-filter-container flex items-center-safe'>
        <div className='search m-3 p-3'>
          <input
            type='text'
            value={searchText}
            data-testid='search-input'
            style={{ width: '15rem' }}
            placeholder='Type something here'
            onChange={(e) => setSearchText(e.target.value)}
            className='search-box px-1 border border-solid border-black'
          />
          <button
            onClick={filterRestaurants}
            className='bg-green-100 m-4 px-4 py-1 rounded-md cursor-pointer'
          >
            Search
          </button>
        </div>
        <div>
          <button
            className='bg-gray-100 px-4 py-1 rounded-md cursor-pointer'
            onClick={() => {
              setFilteredRestaurants((res) =>
                res.filter((item) => item.info.avgRating >= 4.5)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className='search m-3 p-3'>
          <label>
            UserName:{' '}
            <input
              type='text'
              value={loggedInUser}
              style={{ width: '15rem' }}
              onChange={handleTextChange}
              className='search-box px-1 border border-solid border-black'
            />
          </label>
        </div>
      </div>
      <div className='res-container flex flex-wrap'>
        {filteredRestaurants.map((restaurant) =>
          restaurant.info.veg ? (
            <RestaurantsWithVegLabel
              key={restaurant.info.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
