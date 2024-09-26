import { useEffect, useState } from "react";
import { Menu_URL } from "./restaurantURL";

const useRestaurantMenu = (resId) => {
    const [resMenu,setResMenu] = useState(null)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(Menu_URL + resId);
    const response = await data.json();
    setResMenu(response.data);
  };
  return resMenu;
};

export default useRestaurantMenu;
