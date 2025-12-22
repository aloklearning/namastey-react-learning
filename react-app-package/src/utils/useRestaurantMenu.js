import { useEffect, useState } from 'react';
import { SWIGGY_RESTAURANT_MENU_API_URL } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    if (!resId) return;
    fetchMenu(abortController);

    return () => abortController.abort();
  }, [resId]);

  const fetchMenu = async (abortController) => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_MENU_API_URL + resId, {
        signal: abortController.signal,
      });

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const json = await data.json();
      setResMenu(json?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return resMenu;
};

export default useRestaurantMenu;
