function findPair(arr) {
    let result = arr.find((item, index) =>
        arr.indexOf(item) !== index);
    if(result == undefined){
        return null;
    }
    return result;
}

window.findPair = findPair;

export default findPair;
