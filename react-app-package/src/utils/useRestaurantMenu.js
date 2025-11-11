import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_MENU_API_URL + resId);
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
