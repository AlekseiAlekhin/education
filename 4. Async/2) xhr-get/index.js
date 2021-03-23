function xhrGet(url) {
    let promise = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
        xhr.onload = () => {
            (xhr.status >= 200 && xhr.status < 300) ? resolve(xhr.response) :
                reject(xhr.response);
        };
        xhr.send();
    })
    return promise;
}

window.xhrGet = xhrGet;

export default xhrGet;
