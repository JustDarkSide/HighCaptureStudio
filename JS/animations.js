const allStatsValueElements = document.querySelectorAll(
	'.stats__element__value'
);
const statsBox = document.querySelector('.stats__box');
animationStarted = false;
const startTheAnimation = () => {
	allStatsValueElements.forEach((element) => {
		anime({
			targets: element,
			textContent: [0, parseInt(element.dataset.value)],
			round: 1,
			duration: 1500,
			easing: 'easeInOutExpo',
		});
	});
};
document.addEventListener('scroll', () => {
	if (window.scrollY >= statsBox.offsetTop - 150 && animationStarted == false) {
		startTheAnimation();
		animationStarted = true;
	}
});
