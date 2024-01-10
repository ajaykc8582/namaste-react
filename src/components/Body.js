import { useEffect, useState } from "react";
import RestaurantCard, { hocResCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const HocRestaurantCardVeg = hocResCard(RestaurantCard);

    // console.log("body rendered", listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5775218&lng=88.4313413&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        setListOfRestaurants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>Looks like you're offline!! Please check your internet connection</h1>
        );

    // Conditional Rendering
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            setListOfRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        to={"/restaurants/" + restaurant.info.id}
                        key={restaurant.info.id}
                    >
                        {restaurant.info.veg === true ? (
                            <HocRestaurantCardVeg resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
