/*
  Задача
  Написать функцию которая проверяет, является ли email валидным
  Прмеры
  isValidEmail("tima1702@gmail.com") === true
  isValidEmail("tima1702@gmail") === false
  isValidEmail("tima1702@gmail.") === false
  isValidEmail("tima1702gmail.com") === false
  isValidEmail("example_emai@gmail.com") === true
  isValidEmail("example8@gmail.com") === true
  isValidEmail("e2xample8@gmail.com") === true
  isValidEmail("e2xa.mple8@gmail.com") === true
 */

function isValidEmail(email) {
    const exp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gmi;
    return exp.test(email);
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
