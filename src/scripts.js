export function fakeArr(length) {
  let arr = [];
  for (let i of Array(length)) {
    arr.push(null + i);
  }
  return arr;
}
export function Rating(rating, s) {
  const BlueStars = fakeArr(rating).map((_, i) => {
    return (
      <span key={i} className={s.active}>
        <i className="fa-solid fa-star"></i>
      </span>
    );
  });
  const WhiteStars = fakeArr(5 - rating).map((_, i) => {
    return (
      <span key={i}>
        <i className="fa-solid fa-star"></i>
      </span>
    );
  });
  return (
    <div className={s.rating}>
      {[
        BlueStars.map((i) => {
          return i;
        }),
        WhiteStars.map((i) => {
          return i;
        }),
      ]}
    </div>
  );
}
