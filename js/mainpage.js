let scrollDownArrow = document.querySelector('.dot_entrance');
let initialHeight = window.innerHeight;
let initialWidth = window.innerWidth;
const setHeight = () => {
	let height = window.innerHeight;
	let nav = document.querySelector('nav');
	let navHeight = Math.round(
		window.getComputedStyle(nav).getPropertyValue('height').replace('px', '')
	);
	console.log(height);
	console.log(navHeight);
	document.documentElement.style.setProperty('--vh', `${height}px`);
	document.documentElement.style.setProperty('--navHeight', `${navHeight}px`);
};
document.addEventListener('DOMContentLoaded', setHeight);
// window.addEventListener('resize', () => {
// 	if (window.innerWidth != initialWidth && window.innerWidth < 1200) {
// 		setHeight();
// 	} else if (
// 		window.innerHeight != initialHeight ||
// 		(window.innerWidth != innerWidth && window.innerWidth > 1200)
// 	) {
// 		setHeight();
// 	}
// });
scrollDownArrow.addEventListener('click', () => {
	scrollDownArrow.style.display = 'none';
});
