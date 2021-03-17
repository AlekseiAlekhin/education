function searchString(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let stringObj = "?";
  if (keys.length == 0 || values.length == 0) {
    return (stringObj = "");
  }

  for (let key in obj) {
    if (!["", null, undefined].includes(obj[key])) {
      stringObj = stringObj + `${key}=${obj[key]}&`;
    }
  }
  return stringObj.slice(0, -1);
}

window.searchString = searchString;

export default searchString;
