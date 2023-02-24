import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { editCart } from "../../redux/slices/cartSlice";
import { setText } from "../../redux/slices/popupSlice";

function Cart({ props }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  const [focus, setFocus] = useState(null);
  const [value, setValue] = useState(null);
  const InputRef = useRef();

  function popup(text, popup) {
    dispatch(setText(text));
    popup.current.classList.add("active");
    setTimeout(() => popup.current.classList.remove("active"), 3000);
  }

  useEffect(() => {
    InputRef.current != undefined && InputRef.current.focus();
  }, [focus]);

  return (
    <div className={s.container}>
      {cart.length == 0 && (
        <span className={s.emptyCart}>
          cart is empty
          <Link to="/">
            <button>Find Something</button>
          </Link>
        </span>
      )}
      {cart.length > 0 && (
        <>
          <div className={s.cartItems}>
            {cart.map((i, ind) => {
              return (
                <div className={s.item} key={ind}>
                  <div
                    className={s.xmark}
                    onClick={() =>
                      dispatch(editCart({ action: "remove", id: i.id }))
                    }
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <img alt="img" src={i.img} />
                  <span>
                    {i.title.length > 22
                      ? i.title.slice(0, 22) + ".."
                      : i.title}
                  </span>
                  <div className={s.count}>
                    {focus == i.id ? (
                      <input
                        ref={InputRef}
                        className={s.counter}
                        value={value}
                        onBlur={() => {
                          setFocus(null);
                          value > 0 &&
                            dispatch(
                              editCart({
                                action: "update",
                                id: i.id,
                                name: "count",
                                value: value,
                              })
                            );
                        }}
                        onChange={(event) => {
                          setValue(event.target.value);
                        }}
                        onInput={(event) => {
                          event.target.value = event.target.value
                            .replace(/,/g, "")
                            .replace(/\./g, "")
                            .replace(/\-/g, "");
                        }}
                      />
                    ) : (
                      <span
                        onClick={() => {
                          setFocus(i.id);
                          setValue(i.count);
                        }}
                      >
                        x{i.count}
                      </span>
                    )}
                    <b>$ {i.count * i.price}</b>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => popup("Order has been created", props.Popup)}
            className={s.makeOrder}
          >
            make an order
          </button>
        </>
      )}
    </div>
  );
}
export default Cart;
