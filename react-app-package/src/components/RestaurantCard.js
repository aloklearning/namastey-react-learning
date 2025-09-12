import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <Link to={`/restaurants/${resData.info.id}`}>
      <div className="res-card">
        <img
          alt="res-image"
          className="res-image"
          src={CDN_URL + cloudinaryImageId}
        />
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{sla.deliveryTime} minutes</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      </div>
    </Link>
  );
};

export default RestaurantCard;
