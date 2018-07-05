var button = document.querySelector('.offers-hotel-button');
var popup = document.querySelector('.popup-form-absolute');
var formArrival = popup.querySelector('.form-arrival');
var form = popup.querySelector('.popup-form');

var formPeople = form.querySelector('.form-people');
var formChildren = form.querySelector('.form-children');

var arival = form.querySelector ('[name=arrival-date]');
var departure = form.querySelector ('[name=departure-date]');

var adultsLess = form.querySelector("[id=adults-less]");
var childLess = form.querySelector("[id=child-less]");
var adultsMore = form.querySelector("[id=adults-more]");
var childMore = form.querySelector("[id=child-more]");



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

adultsLess.addEventListener("click", function (event) {
	event.preventDefault();
	var num = parseInt(formPeople.value, 10);
	if (num >= 2) {
		formPeople.value = num - 1;
	}
});

childLess.addEventListener("click", function (event) {
	event.preventDefault();
	var num = parseInt(formChildren.value, 10);
		if (num >= 1) {
	formChildren.value = num - 1;
	}
});

adultsMore.addEventListener("click", function (event) {
	event.preventDefault();
	var num = parseInt(formPeople.value, 10);
	if (!num) {
	num = 0;
	}
	formPeople.value = num + 1;
});

childMore.addEventListener("click", function (event) {
	event.preventDefault();
	var num = parseInt(formChildren.value, 10);
	if (!num) {
		num = 0;
	}
	formChildren.value = num + 1;
});
