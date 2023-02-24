import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/sortSlice";
import { setSneakers } from "../../redux/slices/sneakersSlice";
import s from "./index.module.scss";

function Sorting({ props }) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.sortSlice.category);
  const categories = ["from cheap", "from expensive", "by rating"];

  function Sort(i) {
    if (i === 2) {
      const arr = JSON.parse(JSON.stringify(props.sneakers));
      arr.sort((a, b) => {
        if (a.rating < b.rating) return 1;
        if (a.rating > b.rating) return -1;
        return 0;
      });
      dispatch(setSneakers(arr));
    }
    if (i === 1) {
      const arr = JSON.parse(JSON.stringify(props.sneakers));
      arr.sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
      dispatch(setSneakers(arr));
    }
    if (i === 0) {
      const arr = JSON.parse(JSON.stringify(props.sneakers));
      arr.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
      dispatch(setSneakers(arr));
    }
    dispatch(setCategory(i));
  }

  //First sorting
  useEffect(() => Sort(2), []);

  return (
    <div className={s.sorting}>
      Sorting:
      <div className={s.categories}>
        {categories.map((v, i) => {
          return (
            <div
              key={i}
              className={category === i ? s.active : null}
              onClick={() => Sort(i)}
            >
              {v}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sorting;
