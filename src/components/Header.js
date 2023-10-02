import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import cart from "../images/cart.png";

const loggedInUser = () => {
  return true;
};

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://www.zarla.com/images/zarla-meal-dash-1x1-2400x2400-20210604-bp89ptdtxkhqgt99gfgm.png?crop=1:1,smart&width=250&dpr=2 "
    ></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="header sticky">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/instamart">InstaMart</Link>
            </li>
            <li className="cart">
              <Link to="/cart" data-testid="cart">
                <img src={cart} />
                <div className="cartcount">{cartItems.length}</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* <h1 data-testid="online-status">{isOnline ? "🟢 Online" : "🔴"}</h1> */}
        {/* <h1> {user.name}</h1>
            {
              isLoggedIn ?  (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
             ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
             )}
            */}
      </div>
    </>
  );
};

export default Header;
