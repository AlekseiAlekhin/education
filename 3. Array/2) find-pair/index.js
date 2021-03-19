function findPair(arr) {
    let result = arr.find((item, index) =>
        arr.indexOf(item) !== index);
    return result ?  result: null;
}

window.findPair = findPair;

export default findPair;
