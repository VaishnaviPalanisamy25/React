import { useState ,useContext} from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActiveButton,setIsActiveButton] = useState("");

  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  togglePropfun=({isActiveButton})=>{
   var ele = document.getElementById(isActiveButton);
   ele.classList.add("bg-violet-200 rounded-md border");

  }
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/" >
          <span id="Home" onClick={()=>{setIsActiveButton("Home"); togglePropfun(isActiveButton)}} className="px-2 hover:border hover:bg-violet-200 rounded-md active:bg-violet-100">
                Home
              </span>
          </Link>
          <Link to="/about"> 
          <span id="About" onClick={()=>{setIsActiveButton("About"); togglePropfun(isActiveButton)}} className="px-2 hover:border hover:bg-violet-200 rounded-md">
                About
              </span>
          </Link>
          <Link to="/contact">
            <li>
              <span id="Contact" onClick={()=>{setIsActiveButton("Contact"); togglePropfun(isActiveButton)}} className="px-2 hover:border hover:bg-violet-200 rounded-md">
                Contact
              </span>
            </li>
          </Link>
          <span id="Cart" onClick={()=>{setIsActiveButton("Cart"); togglePropfun(isActiveButton)}} className="px-2 hover:border hover:bg-violet-200 rounded-md">
                Cart
              </span>
          <Link to="/instamart">
          <span id="Instamart" onClick={()=>{setIsActiveButton("Instamart"); togglePropfun(isActiveButton)}} className="px-2 hover:border hover:bg-violet-200 rounded-md">
                Instamart
              </span>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button
          className="border-solid bg-purple-900 p-1 m-10 py-px-3-3  rounded-md text-white"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button className="border-solid bg-purple-900 p-1 m-10   rounded-md text-white" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
