
import React from "react";
import {CLOUDINARY_IMAGE_URL} from "../utils/constants.js";
import PropTypes from 'prop-types';


    
const RestaurantCard = (props)=>{
    RestaurantCard.propTypes = {
      resData: PropTypes.object.isRequired, 
    };
      const {resData} = props;
      const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} = resData?.info; ;
      return(
          <div className="res-card">
              <img 
              className="res-logo"
              src={CLOUDINARY_IMAGE_URL+cloudinaryImageId}
              alt="logo" />
              <div className="res-details">
                  <h3>{name}</h3>
                  <h4>{avgRating}⭐ </h4>
                  <h4>{cuisines.join(", ")}</h4>
                  <h4>{costForTwo}</h4>
                  
              </div>
          </div>
      )
  }

  export default RestaurantCard;