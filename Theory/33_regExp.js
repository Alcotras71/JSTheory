'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/ig;
// console.log(ans.match(reg));

// console.log(reg.test(ans)); //либо true, либо false

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));

// \D - ищем все не цифры
// \W - все не буквы

// \d -(diggets) ищем все цифры
// \w - ищем все слова, буквы
// \s - все пробелы

// i - хотим что - то найти вне зависимости от регистра
// g - пытаемся найти сразу несколько вхождений
// m - включает многострочный режим

// console.log(ans.search(reg)); - находит первый искомый элемент
// console.log(ans.match(reg)); - дает на выходе массив эл-тов

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));