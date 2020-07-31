"use strict";

// to String

// 1)
console.log((String(null)));
console.log((String(4)));

// 2)
console.log(typeof (null + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// to Number

// 1) 
console.log(typeof (Number('5')));

// 2) 
console.log(typeof (+'5'));

// 3)
console.log(typeof (parseInt('15px', 10)));

let answer = +prompt('What?', '');

// to Boolean

// 0, '', null, undefined, NaN; ----false

// 1)
let switcher = null;

if (switcher) {
	console.log('Working...');
}

switcher = 1;

if (switcher) {
	console.log('Working...');
}

// 2)
console.log(typeof (Boolean('4')));

// 3) 
console.log(typeof (!!'44444'));