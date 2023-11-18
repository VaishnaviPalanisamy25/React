import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return (
        <div className="header">
            <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXV5hgML9KRd-yEm8TI_iW1QA8VBtkAtU4Q&usqp=CAU" alt="logo" />
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
    
}

const resData ={
    "info": {
      "id": "268782",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "uzfmrebt78hpr0hojdyx",
      "locality": "Electronic City",
      "areaName": "Electronic City",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "268782",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4200
      },
      "parentId": "371281",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "41 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-19 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-electronic-city-bangalore-268782",
      "type": "WEBLINK"
    }
  };

const RestaurantCards = (props)=>{
    const {resData} = props;
    console.log(resData);
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXV5hgML9KRd-yEm8TI_iW1QA8VBtkAtU4Q&usqp=CAU" 
            alt="logo" />
            <div className="res-details">
                <h3>{resData.info.name}</h3>
                <h4>{resData.info.avgRating}⭐ </h4>
                <h4>{resData.info.cuisines.join(", ")}</h4>
                <h4>{resData.info.costForTwo}</h4>
                
            </div>
        </div>
    )

}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search-bar"> 
                Searchbar
            </div>
            <div className="res-container">
                <RestaurantCards resData={resData}/>
                {/* <RestaurantCards/>
                <RestaurantCards/> */}
            </div>
        </div>
    )
}
export default function App() {
  return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);