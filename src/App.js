import { Link, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.scss";
import Main from "./components/Main";
import Sneakers from "./components/Sneakers";
import Cart from "./components/Cart";
import logo from "./images/logo.png";
import { setSneakers } from "./redux/slices/sneakersSlice";
import { useEffect, useRef } from "react";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  const popupText = useSelector((state) => state.popupSlice.text);
  const Popup = useRef();

  useEffect(() => {
    fetch("https://63f4827255677ef68bbd8984.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        dispatch(setSneakers(items));
      });
  }, []);

  return (
    <>
      <div ref={Popup} className="popup">
        {popupText}
      </div>
      <div className="content">
        <div className="Routes">
          <div className="top">
            <Link to="/">
              <div className="shop_logo">
                <img src={logo} alt="logo" width="64" />
                <div>
                  <span>REACT SNEAKERS</span>
                  <i>The Best Sneakers In The World</i>
                </div>
              </div>
            </Link>
            <Link to="/cart">
              <div className="shop_cart">
                <span>{cart.length}</span>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart props={{ Popup }} />} />
            <Route
              path="/sneakers/:id"
              element={<Sneakers props={{ Popup }} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
