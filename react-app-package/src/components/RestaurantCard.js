import { useMemo } from 'react';
import { Link } from 'react-router';
import { CDN_URL } from '../utils/constants';
import { hasValidImageExtension } from '../utils/helper';

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  const finalImageId = useMemo(() => {
    return hasValidImageExtension(cloudinaryImageId)
      ? cloudinaryImageId
      : 'RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/136c9e23-b373-45d5-9fad-7e4763ebd36b_43836.JPG';
  }, [cloudinaryImageId]);

  return (
    <Link to={`/restaurants/${resData.info.id}`}>
      {/* To add a constant in tailwindcss you insert the value in "[]" as shown below in w-[] */}
      <div className='res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200'>
        <img
          alt='res-image'
          className='res-image rounded-lg'
          src={CDN_URL + finalImageId}
        />
        <h4 className='font-bold py-4 text-lg'>{name}</h4>
        <h5>{cuisines.join(', ')}</h5>
        <h5>{sla.deliveryTime} minutes</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      </div>
    </Link>
  );
};

export default RestaurantCard;
