function fullSum(...args) {
  let result = args.reduce(function (sum, current) {
    if (typeof current !== "number") {
      throw Error("Wrong Argument Type");
    }
    return sum + current;
  }, 0);
  return result;
}

window.fullSum = fullSum;

export default fullSum;
