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

const RestaurantCards = ()=>{
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXV5hgML9KRd-yEm8TI_iW1QA8VBtkAtU4Q&usqp=CAU" 
            alt="logo" />
            <div className="res-details">
                <h3>Restaurant Name</h3>
                <p>Address</p>
                <p>Rating</p>
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
                <RestaurantCards/>
                <RestaurantCards/>
                <RestaurantCards/>
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