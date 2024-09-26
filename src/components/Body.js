import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [topList, setTopList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log(data.data.cards[2].card);
      const restaurant =
        data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants ||
        [];

      setListOfRestaurants(restaurant);
      setTopList(restaurant);
      setSearchedRestaurants(restaurant);
    };
    fetchData();
  }, []);

  if (onlineStatus === false)
    return (
      <h1>
        Lookes Like You are disconnected from the web please check your
        connection
      </h1>
    );

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
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const searchedRes = searchedRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchText("");
            setListOfRestaurants(searchedRes);
          }}
        >
          Search
        </button>
        <button
          className="btn btn-success"
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
        {listOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            style={{ textDecoration: "none" }}
          >
            <Card key={restaurant.info.id} currentRes={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
