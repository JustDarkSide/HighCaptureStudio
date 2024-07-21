let scrollDownArrow = document.querySelector('.dot_entrance');
let initialHeight = window.innerHeight;
let initialWidth = window.innerWidth;
let miniaturesToHide = document.querySelectorAll('.miniature_to_hide');
// let youtubeVideo = document.querySelectorAll(".youtube_video");
let youtubeVideoDiv = document.querySelector('.music-content__video');
let youtubeVideoDescriptionDiv = document.querySelector(
	'.music-content__description'
);
let watchItButton = document.querySelector('.watch__it__button');
let videoBackground = document.querySelector(
	'.section__first__background video'
);

let changeVideoButton = document.querySelectorAll('.next_video_button');
let firstVideo = document.querySelector('.firstvideo');
let secondVideo = document.querySelector('.secondvideo');
let closeiosbutton = document.querySelectorAll('.dot-red');
let easterEggCloseWindow = document.querySelector('.close_easterEgg');
changeVideoButton.forEach((element) => {
	element.addEventListener('click', () => {
		firstVideo.classList.toggle('hideFirstVideoBox');
		secondVideo.classList.toggle('showSecondVideoBox');
	});
});

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

miniaturesToHide.forEach((element) => {
	element.addEventListener('click', () => {
		element.style.display = 'none';
		element.previousElementSibling.style.opacity = 1;
	});
});

closeiosbutton.forEach((element) => {
	element.addEventListener('click', (e) => {
		e.stopPropagation();
		element.closest('.close_easterEgg').classList.add('closewindow');
	});
});
