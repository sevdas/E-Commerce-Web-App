//For every 5th image return class "big" and for every 6th image return class "wide"
export function getClass(i) {
  if (i % 5 === 0) {
    return "big";
  } else if (i % 6 === 0) {
    return "wide";
  }
}
