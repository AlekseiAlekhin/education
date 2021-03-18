function isEqual(a, b) {
  let stringA;
  let stringB;
  for (let key in a) {
    stringA = stringA + `${key}${a[key]}`;
  }
  for (let key in b) {
    stringB = stringB + `${key}${b[key]}`;
  }
  if (null == a || null == b) {
    return false;
  }

  return stringA == stringB;
}
window.isEqual = isEqual;

export default isEqual;
