function asyncSum(a, b) {
    return new Promise(function (resolve, reject) {
        (typeof (a) === 'number' && typeof (b) === 'number') ?
            setTimeout(() => resolve(a + b), 100) :
            reject(new Error('error'));
    })
}

window.asyncSum = asyncSum;

export default asyncSum;
