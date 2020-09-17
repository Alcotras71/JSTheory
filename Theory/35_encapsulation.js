'use strict';

class User {
	constructor(name, age) {
		this.userName = name;
		this.userAge = age;
	}

	#surname = 'Alekseev';


	say = () => {
		console.log(`Имя пользователя: ${this.userName} ${this.#surname}, возраст ${this.userAge}`);
	}

	get surname() {
		return this.#surname;
	}

	set surname(userSurname) {
		if (typeof userSurname === 'string' && userSurname.length > 0 && userSurname.length < 14) {
			this.#surname = userSurname;
		} else {
			console.log('Недопустимое значение!');
		}
	}
}

const andrey = new User('Andrey', 22);
console.log(andrey.surname);
andrey.surname = 'Lazarev';
console.log(andrey.surname);

andrey.say();