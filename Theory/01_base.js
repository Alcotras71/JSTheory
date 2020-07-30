// 1 Переменные-----------------------------------------------------------------

// var name = "Andrey"; - не использовать variable

// camelCase
const firstName = 'Andrey'; //string
const age = 22; //number
const isProgrammer = true; //boolean

const _private = 'private';
// const $ = 'some value';

// const if = 'mkef' //err
// const withNum5 = '5';
// const 5 withNum = 5; //err

// 2 Мутирование----------------------------------------------------------------
// console.log('Имя человека: ' + firstName + ', а возраст человека : ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека : ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы------------------------------------------------------------------
// let currentYear = 2020
// const birthYear = 1998

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(--currentYear)
// console.log

// 4 Типы данных------------------------------------------------------------
// const isProgrammer = true
// const name = 'Andrey'
// const age = 22
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x) undefined
// console.log(typeof null)

// 5 Приоритет операторов-------------------------------------------------
// const fullAge = 22
// const birthYear = 1998
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge //22=22 - true
// console.log(isFullAge)

// 6 Условные операторы --------------------------------------------------
// const courseStatus = 'fail' //ready, fail, pending

// if (courseStatus === 'ready') {
// 	console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
// 	console.log('Курс пока находится в разработке')
// } else {
// 	console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
// 	console.log('Все готово!')
// } else {
// 	console.log('Все не готово!')
// }

//Тернарное выражение
// isReady ? console.log('Все готов!') : console.log('Все не готово!')

// const num1 = 42 //number
// const num2 = '42' //string

// console.log(num1 === num2)

// 7 Булевая логика ----------------------------------------------------
// https: //developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции ---------------------------------------------------------------

// function calulateAge(year) {
// 	return 2020 - year
// }

// console.log(calulateAge(1998))
// console.log(calulateAge(2018))
// console.log(calulateAge(1990))

// function logInfoAbout(name, year) {
// 	const age = calulateAge(year)

// 	if (age > 0) {
// 		console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// 	} else {
// 		console.log('Вообще-то это уже будущее!')
// 	}
// }

// logInfoAbout('Andrey', 1998)
// logInfoAbout('Елена', 1996)
// logInfoAbout('sss', 2222)

// 9 Массивы ----------------------------------------------------------------

// const cars = ['Мазда', 'Мерседес', 'Форд'];
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы -------------------------------------------------------------------

// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche'];

// for (let i = 0; i < cars.length; i++) {
// 	const car = cars[i]
// 	console.log(car)
// }

// for (let car of cars) {
// 	console.log(car)
// }

// 11 Объекты ----------------------------------------------------------------
// const person = {
// 	firstName: 'Andrey',
// 	lastName: 'Alekseev',
// 	year: 1998,
// 	languages: ['Ru', 'En', 'De'],
// 	hasWife: false,
// 	greet: function () {
// 		console.log('greet')
// 	}
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)

// person.greet()