import stringToType from '/home/user/work/education/2. Data Types/1) string-to-type/index.js';

function queryToObject(query) {
    const arr = query.slice(1).split('&');
    const array = arr.map((item) => item.split('='));
    return array.reduce(function (accum, item) {
        accum[item[0]] = stringToType(item[1]);
        return accum;
    }, {});
}

window.queryToObject = queryToObject;

export default queryToObject;
