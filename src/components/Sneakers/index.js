import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editCart } from "../../redux/slices/cartSlice";
import { Rating } from "../../scripts";
import SimilarSneakers from "./SimilarSneakers";
import s from "./index.module.scss";
import { setText } from "../../redux/slices/popupSlice";

function Sneakers({ props }) {
  const [counter, setCounter] = useState(1);
  const [render, setRender] = useState(false);
  const [focus, setFocus] = useState(false);
  const InputRef = useRef();
  const dispatch = useDispatch();

  const sneakersId = window.location.href.slice(-1);
  const allSneakers = useSelector((state) => state.sneakersSlice.sneakers);
  const sneakers = allSneakers.filter((i) => i.id == sneakersId)[0];

  function changeCounter(symbol) {
    symbol == "+"
      ? setCounter(Number(counter) + 1)
      : counter > 1 && setCounter(Number(counter) - 1);
  }
  function popup(text, popup) {
    dispatch(setText(text));
    popup.current.classList.add("active");
    setTimeout(() => popup.current.classList.remove("active"), 3000);
  }

  const similarSneakers = allSneakers.filter(
    (i) => i.sex == sneakers.sex && i.id != sneakers.id
  );

  useEffect(() => {
    InputRef.current != undefined && InputRef.current.focus();
  }, [focus]);

  return (
    <div className={s.container}>
      {allSneakers.length != 0 && (
        <>
          <div className={s.mainInfo}>
            <img alt="sneakers" src={sneakers.img} />
            <div className={s.title}>
              <div>{sneakers.title}</div>
              <span>{sneakers.description}</span>
              <div className={s.bottom}>
                <div className={s.characteristic}>
                  <span>
                    <h5>sex:</h5> {sneakers.sex}
                  </span>
                  <span>
                    <h5>size:</h5> {sneakers.size}
                  </span>
                  <span>
                    <h5>made in:</h5> {sneakers.madeIn}
                  </span>
                  <span>
                    <h5>rating:</h5> {Rating(sneakers.rating, s)}
                  </span>
                  <span>
                    <h5>price:</h5> $ {sneakers.price}
                  </span>
                </div>
                <div className={s.addToCart}>
                  <div className={s.counter}>
                    <span onClick={() => changeCounter("+")}>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                    {focus === true ? (
                      <input
                        type="number"
                        value={counter}
                        ref={InputRef}
                        onBlur={() => setFocus(false)}
                        onChange={(event) => {
                          event.target.value > 0 &&
                            setCounter(event.target.value);
                        }}
                        onInput={(event) => {
                          event.target.value = event.target.value
                            .replace(/,/g, "")
                            .replace(/\./g, "");
                        }}
                      />
                    ) : (
                      <span onClick={() => setFocus(!focus)}>x{counter}</span>
                    )}
                    <span onClick={() => changeCounter("-")}>
                      <i className="fa-solid fa-minus"></i>
                    </span>
                  </div>
                  <div className={s.totalPrice}>
                    $ {sneakers.price * counter}
                  </div>
                  <div
                    className={s.button}
                    onClick={() => {
                      dispatch(
                        editCart({
                          action: "add",
                          item: { ...sneakers, count: counter },
                        })
                      );
                      popup("Item has been added to cart", props.Popup);
                    }}
                  >
                    <i className="fa-solid fa-basket-shopping"></i>
                    add to cart
                    <i className="fa-solid fa-basket-shopping"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.similar}>
            <SimilarSneakers props={{ similarSneakers, render, setRender }} />
          </div>
        </>
      )}
    </div>
  );
}

export default Sneakers;
