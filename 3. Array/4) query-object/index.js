import stringToType from '/home/user/work/education/2. Data Types/1) string-to-type/index.js';

function queryToObject(query) {
    const obj = {};
    const arr = query.slice(1).split('&');
    const array = arr.map((item) => item.split('='));
    array.reduce(function (item, index) {
       obj[index[0]] = stringToType(index[1]);
    }, 0);
    return obj;
}

window.queryToObject = queryToObject;

export default queryToObject;
