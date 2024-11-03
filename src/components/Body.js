import RestaurantCard from "./ResCard";
import resList from "../utils/mockData";


const Body = () =>{
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    listOfRestaurants = resList.filter((res)=> res.info.avgRating > 4)
                    console.log(listOfRestaurants)
                }}>Top Rated Restaurant
                </button>
            </div>
            
            <div className="res-container">
                {
                    resList.map((restaurant) =>(
                        <RestaurantCard resdata ={restaurant} key={restaurant.info.id} />
                        
                    ))
                }
                
            </div>
        </div>
    )
}

export default Body;