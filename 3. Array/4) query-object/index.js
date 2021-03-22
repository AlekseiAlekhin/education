function queryToObject(query) {
    let obj = {};
    let arrSome = `${query}`;
    let arrString = ``;
    for (let a of arrSome) {
        switch (a) {
            case '?':
                break;
            case '=':
                arrString = arrString + ',';
                break;
            case '&':
                arrString = arrString + ',';
                break;
            default:
                arrString = arrString + a;
                break;
        }
    }
    console.log(arrString);
    let array = arrString.split(',').map(function (item) {
        if (Number(item)) {
            return parseInt(item, 10);
        }
        switch (item) {
            case "null":
                return null;
            case "undefined":
                return undefined;
            case "true":
                return true;
            case "false":
                return false;
            case "0":
                return 0;
            default:
                return item;
        }

    });
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            obj[array[i]] = array[i + 1];
        }
        // console.log(obj)
    }
    return obj;
}

window.queryToObject = queryToObject;

export default queryToObject;
