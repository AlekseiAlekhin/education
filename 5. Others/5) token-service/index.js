/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
    constructor() {
        this.subscribersStorage = [];
        this.tokenStorage = null;
    }
    subscribe(subscribe){
        this.subscribersStorage.push(subscribe)
    }
    setToken(token){
        this.tokenStorage = token;
        this.subscribersStorage.forEach(function (func){
            func(token);
        });
    }
    removeToken(){
        this.tokenStorage = null;
        this.subscribersStorage.forEach(function (func){
            func(null);
        });
    }
    getToken(){
        return this.tokenStorage;
    }
}

window.TokenService = TokenService;

export default TokenService;
