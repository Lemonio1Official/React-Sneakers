import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import s from "./index.module.scss";
import Sorting from "./Sorting";
import { fakeArr, Rating } from "../../scripts";
import MyLoader from "./Skeleton";

function Main() {
  const sneakers = useSelector((state) => state.sneakersSlice.sneakers);

  return (
    <div className={s.container}>
      <Sorting props={{ sneakers }} />
      <div className={s.items}>
        {sneakers.length == 0 &&
          fakeArr(8).map((i, ind) => {
            return (
              <div className={s.grid_item} key={ind}>
                <MyLoader key={ind} />;
              </div>
            );
          })}
        {sneakers.map((i, ind) => {
          return (
            <div className={s.grid_item} key={ind}>
              <Link to={"/sneakers/" + i.id}>
                <div className={s.item}>
                  <img alt="sneakers" src={i.img} />
                  <span>
                    {i.title.length > 32
                      ? i.title.slice(0, 32) + ".."
                      : i.title}
                  </span>
                  <div className={s.bottom}>
                    <div className={s.price}>$ {i.price}</div>
                    {Rating(i.rating, s)}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
