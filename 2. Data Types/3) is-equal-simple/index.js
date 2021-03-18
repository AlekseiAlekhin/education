function isEqual(a, b) {
  let stringA;
  let stringB; 
  if (null === a || null === b) {
    return false;
  }
  for (let key in a) {
    stringA = stringA + `${key}${a[key]}`;
  }
  for (let key in b) {
    stringB = stringB + `${key}${b[key]}`;
  }
 

  return stringA == stringB;
}
window.isEqual = isEqual;

export default isEqual;
