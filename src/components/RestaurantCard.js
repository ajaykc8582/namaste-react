import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div className="m-4 p-4 w-[240px] h-[390px] rounded-xl bg-gray-100 hover:bg-gray-200">
          
            <img
                className="rounded-lg h-52 w-full mb-4"
                alt="res-logo"
                src={CDN_URL + resData.info.cloudinaryImageId} />
        
            <h3 className="font-bold py-2 truncate w-44">{name}</h3>
            <h4 className="truncate w-44">{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

//Higher Order Component

//Input - RestaurantCard => RestaurantCardPromoted
// HOC - Higher order Component

export const hocResCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-400 text-white m-2 p-2 rounded-lg">Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;