let amountOfPhotosForSpecificBreakpoint = 0;
const adjustHeight = () => {
	let innerWidth = window.innerWidth;
	if (window.innerWidth >= 1200 && window.innerWidth < 2000) {
		innerWidth = innerWidth - 4 * 6;
		amountOfPhotosForSpecificBreakpoint = 5;
	} else if (window.innerWidth >= 2000) {
		innerWidth = innerWidth - 3 * 6;
		amountOfPhotosForSpecificBreakpoint = 4;
	} else if (window.innerWidth >= 768) {
		innerWidth = innerWidth - 2 * 6;
		amountOfPhotosForSpecificBreakpoint = 3;
	} else {
		innerWidth = innerWidth - 1 * 4;
		amountOfPhotosForSpecificBreakpoint = 2;
	}
	document.documentElement.style.setProperty(
		'--itemWidth',
		`${innerWidth / amountOfPhotosForSpecificBreakpoint}px`
	);
};
document.addEventListener('DOMContentLoaded', adjustHeight);
window.addEventListener('resize', adjustHeight);
