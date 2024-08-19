import restaurantList from "../utils/mokeData";
import Card from "./Card";
import { useState } from "react";
const Body = () => {
  const [searchedRestaurant, setSearchedRestaurant] = useState(restaurantList);
  const [notFound, setNotFound] = useState(false);
  return (
    <div className="container">
      <div className="search">
        <input type="text" id="searchEl"></input>
        <button
          onClick={() => {
            const inputElValue = document.getElementById("searchEl").value;
            const filteredRes = searchedRestaurant.filter(
              (res) => res.name === inputElValue
            );
            console.log(filteredRes);
            if (filteredRes.length == 0) {
              console.log("not found");
              setNotFound(true);
            }
            setSearchedRestaurant(filteredRes);
          }}
        >
          search
        </button>
      </div>
      <div className="cardcontainer">
        {notFound ? (
          <h1>Hotel Not Found</h1>
        ) : (
          searchedRestaurant.map((restaurant, index) => (
            <Card key={index} currentRes={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
