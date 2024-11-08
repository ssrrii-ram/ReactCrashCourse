import RestaurantCard from "./ResCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSubmit = () => {
    setListOfRestaurants(
      allRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setListOfRestaurants(resList);
      setAllRestaurants(resList);
    }, 2000);
  }, []);

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSubmit}>search</button>
          <button
            className="filter-btn"
            onClick={() => {
              setListOfRestaurants(
                allRestaurants.filter((res) => res.info.avgRating < 4)
              );
            }}
          >
            filtered Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resdata={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
