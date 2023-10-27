import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5775218&lng=88.4313413&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);

        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // Conditional Rendering
    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )

                            setFilteredRestaurant(filteredRestaurant);
                        }}

                    >Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.info.avgRating > 4.4
                        )
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}


export default Body;