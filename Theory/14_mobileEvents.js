'use strict';

// touchstart прикосновение пальца
// touchmove движение пальца
// touchend при отрыве пальца от экрана
// touchenter когда ведем пальцем по экрану и наскальзываем на элемент на котором данное событие
// touchleave ушел за пределы элемента
// touchcancel точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (e) => {
		e.preventDefault();

		console.log('start');
		console.log(e.targetTouches);
	});

	box.addEventListener('touchmove', (e) => {
		e.preventDefault();

		console.log(e.targetTouches[0].pageX);
	});

	// box.addEventListener('touchend', (e) => {
	// 	e.preventDefault();

	// 	console.log('End');
	// });
});

// touches - определяет количество пальцев
// targetTouches - пальцы которые взаимодействуют именно с этим элементом
// changedTouches - список пальцев, которые учавствуют в текующем событии