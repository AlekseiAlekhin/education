function isEqualAdvances(a, b) {
    const strA = JSON.stringify(a, (key, item) => (item === undefined) ? item = 'undefined' : item);
    const strB = JSON.stringify(b, (key, item) => (item === undefined) ? item = 'undefined' : item)
    return strA === strB;
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
