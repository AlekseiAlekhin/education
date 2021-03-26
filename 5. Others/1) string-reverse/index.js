/*
  Задача:
  Добавить функции метод reverse, который будет переворачивать строку на оборот
  Примеры:
  'test'.reverse() === 'tset';
  'bob'.reverse() === 'bob';
  'abc123'.reverse() === '321cba';
 */

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
};


