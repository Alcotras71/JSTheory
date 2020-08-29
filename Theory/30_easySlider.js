// Slider

const slides = document.querySelectorAll('.offer__slide'),
	prev = document.querySelector('.offer__slider-prev'),
	next = document.querySelector('.offer__slider-next'),
	total = document.querySelector('#total'),
	current = document.querySelector('#current');
let slideIndex = 1;

showSlides(slideIndex);

if (slides.length < 10) {
	total.textContent = `0${slides.length}`;
} else {
	total.textContent = slides.length;
}

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	if (slideIndex < 10) {
		current.textContent = `0${slideIndex}`;
	} else {
		current.textContent = slideIndex;
	}

	slides.forEach(slide => {
		slide.style.display = 'none';
	});

	slides[slideIndex - 1].style.display = 'block';
}

function plusSlide(n) {
	showSlides(slideIndex += n);
}

next.addEventListener('click', e => {
	plusSlide(1);
});

prev.addEventListener('click', e => {
	plusSlide(-1);
});