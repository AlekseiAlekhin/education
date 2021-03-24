function rowZero(str) {
    if (/1+/.test(str) && !/0+/.test(str) || str === '') {
        return 0
    } else {
        return str.match(/0+/g).reduce(function (accum, item) {
            return (accum.length < item.length) ? item : accum;
        }).length;
    }
}


window.rowZero = rowZero;

export default rowZero;
