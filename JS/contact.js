let formInput = document.querySelectorAll(
	"input[type='text'], input[type='phone'], input[type='email'], textarea"
);

const setHeight = () => {
	let height = window.innerHeight;
	let width = window.innerWidth;
	let nav = document.querySelector('nav');
	let navHeight = Math.round(
		window.getComputedStyle(nav).getPropertyValue('height').replace('px', '')
	);
	console.log(height);
	console.log(navHeight);
	document.documentElement.style.setProperty('--vh', `${height}px`);
	document.documentElement.style.setProperty('--navHeight', `${navHeight}px`);
	document.documentElement.style.setProperty('--width', `${width}px`);
	document.documentElement.style.setProperty(
		'--reversedWidth',
		`${-1 * width}px`
	);
};

formInput.forEach((element) => {
	element.addEventListener('focusout', () => {
		if (element.value != '') {
			element.style.border = '2px solid rgb(223, 174, 14)';
			element.style.outline = 'none';

			// element.nextElementSibling.style.transform = "translateY(0)";
			// element.nextElementSibling.style.color = "rgb(223, 174, 14)";
			// element.nextElementSibling.style.backgroundColor = "#333333";
		} else {
			element.nextElementSibling.style.transform = 'translateY(0)';
		}
	});
	element.addEventListener('focus', () => {
		if (window.innerWidth < 768) {
			element.nextElementSibling.style.transform = 'translateY(-120%)';
		} else {
			element.nextElementSibling.style.transform = 'translateY(-125%)';
		}
		element.nextElementSibling.style.color = 'rgb(223, 174, 14)';
		element.nextElementSibling.style.backgroundColor = '#333333';
		element.nextElementSibling.style.borderRadius = '8px';

		document.body.style.zoom = '1';
	});
});

document.addEventListener('DOMContentLoaded', () => {
	setHeight();
});
