import React from "react";
import { Link } from "react-router-dom";

import s from "./index.module.scss";

function SimilarSneakers({ props }) {
  return (
    <>
      {props.similarSneakers.map((i, ind) => {
        return (
          <Link
            to={"/sneakers/" + i.id}
            key={ind}
            onClick={() => props.setRender(!props.render)}
          >
            <div className={s.item}>
              <img alt="img" src={i.img} />
              <div>
                {i.title.length > 20 ? i.title.slice(0, 20) + ".." : i.title}
              </div>
              <span>$ {i.price}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default SimilarSneakers;
