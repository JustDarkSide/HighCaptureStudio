let scrollDownArrow = document.querySelector('.dot_entrance');
let initialHeight = window.innerHeight;
let initialWidth = window.innerWidth;
let miniatureToHide = document.querySelector('.miniature_to_hide');
let youtubeVideo = document.querySelector('.youtube_video');
let youtubeVideoDiv = document.querySelector('.music-content__video');
let youtubeVideoDescriptionDiv = document.querySelector(
	'.music-content__description'
);
let watchItButton = document.querySelector('.watch__it__button');
let videoBackground = document.querySelector(
	'.section__first__background video'
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
document.addEventListener('DOMContentLoaded', () => {
	setHeight();
	videoBackground.playbackRate = 1.3;
});

scrollDownArrow.addEventListener('click', () => {
	scrollDownArrow.style.display = 'none';
});

miniatureToHide.addEventListener('click', () => {
	miniatureToHide.style.display = 'none';
	youtubeVideo.style.opacity = 1;
});

watchItButton.addEventListener('click', () => {
	if (youtubeVideoDiv.classList.contains('showYTVideo')) {
		youtubeVideoDiv.classList.remove('showYTVideo');
		youtubeVideoDiv.classList.add('hideYTVideo');
		youtubeVideoDescriptionDiv.classList.remove('showYTVideoDescription');
		youtubeVideoDescriptionDiv.classList.add('hideYTVideoDescription');
	} else {
		youtubeVideoDiv.classList.add('showYTVideo');
		youtubeVideoDiv.classList.remove('hideYTVideo');
		youtubeVideoDescriptionDiv.classList.add('showYTVideoDescription');
		youtubeVideoDescriptionDiv.classList.remove('hideYTVideoDescription');
	}
	if (watchItButton.textContent == 'Watch it!') {
		watchItButton.textContent = 'See preview!';
	} else {
		watchItButton.textContent = 'Watch it!';
	}
});
