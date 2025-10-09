import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_MENU_API_URL + resId);
    const json = await data.json();

    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
