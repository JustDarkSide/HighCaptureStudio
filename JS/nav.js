let burgerIcon = document.querySelector('.hamburger');
let navExternalPart = document.querySelector('.nav__external__part');
let burgerIconBars = document.querySelector('.hamburger-inner');
let navElements = document.querySelectorAll('.nav__external__part__item');

const manageNav = () => {
	burgerIcon.classList.toggle('is-active');
	navExternalPart.classList.toggle('activated');
	if (
		window.getComputedStyle(burgerIcon).getPropertyValue('position') ==
		'absolute'
	) {
		burgerIcon.style.position = 'fixed';
		if (window.innerWidth >= 1200) {
			burgerIcon.style.left = '89%';
		} else {
			burgerIcon.style.left = '80%';
		}
	} else {
		burgerIcon.style.position = 'absolute';
		if (window.innerWidth >= 1200) {
			burgerIcon.style.left = '60%';
		} else {
			burgerIcon.style.left = '50%';
		}
	}
};

navElements.forEach((element) => {
	element.addEventListener('click', manageNav);
});

burgerIcon.addEventListener('click', () => {
	manageNav();
});
