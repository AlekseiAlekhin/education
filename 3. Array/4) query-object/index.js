function queryToObject(query) {
    const obj = {};
    const arr = query.slice(1).split('&');
    console.log(arr)
    const array = arr.map((item) => item.split('='))
    console.log('array', array)
    array.forEach(function (item, index) {
        if (Number(item[1])) {
            obj[item[0]] = parseInt(item[1], 10);
        } else {
            switch (item[1]) {
                case "true":
                    obj[item[0]] = true;
                    break;
                case "false":
                    obj[item[0]] = false;
                    break;
                case "0":
                    obj[item[0]] = 0;
                    break;
                default:
                    obj[item[0]] = item[1];
                    break;
            }
        }
    });
    return obj;
}

window.queryToObject = queryToObject;

export default queryToObject;
