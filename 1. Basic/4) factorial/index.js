function factorial(n) {
  let x = 1; // ввели переменную x для промежуточных вычислений 
  for (let i = 1; i <= n ; i++ ){
    x = x * i;
  }
  return x;
}

window.factorial = factorial;

export default factorial;
