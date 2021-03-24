 import isEqual from '/home/user/work/education/2. Data Types/3) is-equal-simple/index.js';

function isEqualAdvances(a, b) {
    if (a === null || b === null || Object.values(a).includes(undefined) || Object.values(b).includes(undefined)){
        return isEqual(a, b);
    }else{
       return JSON.stringify(a) === JSON.stringify(b);
    }
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
