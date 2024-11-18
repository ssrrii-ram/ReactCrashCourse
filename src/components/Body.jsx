import RestaurantCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllRestaurants(restaurants);
    setListOfRestaurants(restaurants);
  }

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
                allRestaurants.filter((res) => res.info.avgRating > 4)
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`}><RestaurantCard resdata={restaurant} key={restaurant.info.id} /></Link>
          // <RestaurantCard resdata={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
