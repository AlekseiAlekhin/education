function basicCalc(operation, a, b) {
   let result;
  switch(operation){
    case "+":
      result = a + b;
      return result;
      break;
      case "-":
      result = a - b;
      return result;
      break;
      case "*":
      result = a * b;
      return result;
      break;
      case "/":
      result = a / b;
      return result;
      break;
  }

}

window.basicCalc = basicCalc;

export default basicCalc;
