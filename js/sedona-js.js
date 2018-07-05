var button = document.querySelector('.offers-hotel-button');
var popup = document.querySelector('.popup-form-absolute');
var formArrival = popup.querySelector('.form-arrival');
var form = popup.querySelector('.popup-form');
var formPeople = form.querySelector('.form-people');
var formChildren = form.querySelector('.form-children');


button.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.toggle('popup-form-open');
	popup.classList.remove("popup-form-error");
	formArrival.focus();
});

form.addEventListener('submit', function (evt) {
	if (formPeople.value <= 0 || formChildren.value <= 0) {
	evt.preventDefault();
	popup.classList.remove("popup-form-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("popup-form-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains('popup-form-open')) {
		evt.preventDefault();
		popup.classList.remove('popup-form-open');
		popup.classList.remove("popup-form-error");
		}
	}
});




