const footerYearSpan = document.querySelector('.footer__year');
document.addEventListener('DOMContentLoaded', () => {
	const dateYear = new Date();
	footerYearSpan.textContent = dateYear.getFullYear();
});
