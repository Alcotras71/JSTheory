/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// 1
const numberOfFilms = +prompt('Сколко фильмов вы уже посмотрели?', '3');

// 2 
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// 3
const whatAboutFilm1 = [
		prompt('Один из последних просмотренных фильмов?', 'Кингсман'),
		+prompt('На сколько оцените его?', '9.0')
	],
	whatAboutFilm2 = [
		prompt('Один из последних просмотренных фильмов?', 'Игра в имитацию'),
		+prompt('На сколько оцените его?', '8.6')
	];

personalMovieDB.movies[whatAboutFilm1[0]] = whatAboutFilm1[1];
personalMovieDB.movies[whatAboutFilm2[0]] = whatAboutFilm2[1];

console.log(personalMovieDB);