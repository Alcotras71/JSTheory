'use strict';

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); //Получаем все узлы родителя(Ноды)
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild); // получаем элемент
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode); // Получаем родительский узел(элемент)

// console.log(document.querySelector('#current').parentNode.parentNode); // родителя родителя
// console.log(document.querySelector('#current').parentElement); // родительский эелемент

// console.log(document.querySelector('[data-current="3"]').previousSibling); // предыдущий узел
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получаем следующий ЭЛЕМЕНТ

for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);
}