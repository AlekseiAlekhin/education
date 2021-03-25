/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элимент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack {
    stackArr = [];
    size = 0;
    push(value){
        this.size = this.stackArr.length+1;
        this.stackArr.push(value);
        return this;
    }
    pop(){
        if (!this.stackArr.length) {
            throw new Error("Stack is empty!");
        } else {
            this.size = this.stackArr.length - 1;
            this.stackArr.pop();
            return this;
        }

    }
    isEmpty(){
       return (!this.stackArr.length);
    }
    print(){
        return `[${this.stackArr.join(', ')}]`;
    }
}

window.Stack = Stack;

export default Stack;
