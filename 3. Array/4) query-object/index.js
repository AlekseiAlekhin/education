import {stringToType} from '/home/user/work/education/2. Data Types/1) string-to-type/index.js';

function queryToObject(query) {
    const obj = {};
    const arr = query.slice(1).split('&');
    console.log(arr)
    const array = arr.map((item) => item.split('='))
    console.log('array', array)
    array.reduce(function (item) {
       return obj[item[0]] = stringToType(item[1]);
    });
    return obj;
}

window.queryToObject = queryToObject;

export default queryToObject;
