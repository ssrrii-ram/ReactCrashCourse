import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constants"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams()


  useEffect(() => {
    fetchResInfo();
  }, []);

  // 107728

  async function fetchResInfo() {
    const data = await fetch(
      MENU_API + resId
    );
    const json = await data.json();
    console.log(json)
    
    setResInfo(json.data);
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[3];

  // console.log(itemCards)


  return (
    <div>
      <h1>
        {name}- {areaName}{" "}
      </h1>

      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>

      <h2>Menu</h2>

      <ul>
        {/* {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100}  </li>)} */}
      
      </ul>
    </div>
  );
};

export default RestaurantMenu;
