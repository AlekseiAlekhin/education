function isOdd(a) {
  a = a % 2;
  if ( a === 0){
    return true;
  }
  else{
    return false;
  }
}

window.isOdd = isOdd;

export default isOdd;
