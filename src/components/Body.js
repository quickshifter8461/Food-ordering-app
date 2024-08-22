import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [topList, setTopList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=11.2587531&lng=75.78041"
      );
      const data = await response.json();

      const restaurant =
        data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurant);
      setTopList(restaurant);
      setSearchedRestaurants(restaurant);
    };
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchedRes = searchedRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchText("")
            setListOfRestaurants(searchedRes)
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filteredRes = topList.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredRes);
          }}
        >
          Top restaurants
        </button>
      </div>
      <div className="cardcontainer">
        {listOfRestaurants.map((restaurant, index) => (
          <Card key={index} currentRes={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
