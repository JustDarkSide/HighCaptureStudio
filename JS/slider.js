let mainPhoto = document.querySelector('.photo img, .photo video'); //IMG OR VIDEO IN MAIN PHOTO DIV
const otherPhotosBox = document.querySelector('.thumbnails-box'); //THUMBNAILS EXTERNAL DIV
const thumbnailPhotoBox = document.querySelectorAll(
	'.thumbnails-box .img-box div img, .thumbnails-box .img-box div video'
); //DIV FOR ALL THUMBNAILS
let photoBoxImg = document.querySelector('.photo img, .photo video'); //IMG OR VIDEO TAG IN MAIN PHOTO DIV ADDITONAL VARIABLE
let photoBox = document.querySelector('.photo'); //MAIN PHOTO DIV
const bigLeftArrow = document.querySelector('.arrow-left'); //LEFT ARROW
const bigRightArrow = document.querySelector('.arrow-right'); //RIGHT ARROW
const smallTopArrow = document.querySelector('.small-arrow-left'); //SMALL TOP ARROW (NEED TO CHANGE THE CLASSNAME)
const smallBottomArrow = document.querySelector('.small-arrow-right'); //SMALL BOTTOM ARROW (NEED TO CHANGE THE CLASSNAME)
const bigLeftArrowPc = document.querySelector('.arrow-leftpc');
const bigRightArrowPc = document.querySelector('.arrow-rightpc');
const bigRightArrowM = document.querySelector('.arrow-right-m');
const bigLeftArrowM = document.querySelector('.arrow-left-m');
let mainOnlyPhoto = document.querySelector('.photo img');
const fullImgContainer = document.querySelector('.full_size_img');
const fullImg = document.querySelector('.bigbigImg');
const bigbig = document.querySelector('.bigbig');
const bigbigButton = document.querySelector('.full_size_img-close');
const bodyelement = document.querySelector('body');

let previousThumbnailIndex = 0; //INDEX OF PREVIOUS SELECTED THUMBNAIL (IN ANY WAY)
let previousPhotoIndex = 0; //INDEX OF PREVIOUS SELECTED PHOTO
let photoIndex = 0; //CURRENT INDEX OF PHOTO
let thumbnailIndex = 0; //CURRENT INDEX OF THUMBNAIL
let pathCollection = []; //COLLECTION OF PATHS TO IMAGES
let touchstart = 0; // INDEX FOR TOUCH EVENT
let touchend = 0; //INDEX FOR TOUCH EVENT
let scrollValue = 0; //VALUE OF SCROLL
let decreasingIndex = 0; // VARIABLE FOR DECREASING SCROLL VALUE
let increasingIndex = 0; // VARIABLE FOR INCREASING SCROLL VALUE
let fullThumbnailSize = 0; //FULL THUMBNAIL SIZE
let isMobile = window.innerWidth < 1200 ? true : false;
let temporaryImagePath;
let touchstartVertical = 0;
let touchendVertical = 0;

const setRightElementProperties = () => {
	let thumbnailWidth = Math.round(
		window
			.getComputedStyle(thumbnailPhotoBox[thumbnailIndex])
			.getPropertyValue('width')
			.replace('px', '')
	);
	let thumbnailMarginLeft = window
		.getComputedStyle(thumbnailPhotoBox[thumbnailIndex])
		.getPropertyValue('margin-left')
		.replace('px', '');
	let thumbnailMarginRight = window
		.getComputedStyle(thumbnailPhotoBox[thumbnailIndex])
		.getPropertyValue('margin-right')
		.replace('px', '');

	thumbnailMarginLeft = parseInt(thumbnailMarginLeft);
	thumbnailMarginRight = parseInt(thumbnailMarginRight);

	fullThumbnailSize =
		thumbnailWidth + thumbnailMarginLeft + thumbnailMarginRight;
	console.log(fullThumbnailSize);
};
const collectAllPathsInfo = () => {
	for (let i = 0; i < thumbnailPhotoBox.length; i++) {
		let photoPath = thumbnailPhotoBox[i].getAttribute('src');

		pathCollection.push(photoPath);
		console.log(pathCollection);
	}
};
const clearAllActiveThumbnails = () => {
	for (let z = 0; z < thumbnailPhotoBox.length; z++) {
		if (thumbnailPhotoBox[z].classList.contains('active')) {
			thumbnailPhotoBox[z].classList.remove('active');
		}
	}
};
const changeMainPhoto = () => {
	thumbnailPhotoBox.forEach((photo) => {
		photo.addEventListener('click', function () {
			previousThumbnailIndex = thumbnailIndex;
			previousPhotoIndex = photoIndex;
			let thumbnailPath = photo.getAttribute('src');
			photoIndex = pathCollection.indexOf(thumbnailPath);
			console.log(photoIndex);
			mainPhoto.setAttribute('title', 'main photo');

			temporaryImagePath = pathCollection[photoIndex];
			// if (isMobile == false) {
			// 	temporaryImagePath = temporaryImagePath.replace('small', 'big');
			// }
			mainPhoto.setAttribute('src', `${temporaryImagePath}`);
			setRightElementProperties();
			thumbnailIndex = photoIndex;
			clearAllActiveThumbnails();
			thumbnailPhotoBox[photoIndex].classList.add('active');

			if (previousThumbnailIndex > thumbnailIndex) {
				decreasingIndex =
					(previousThumbnailIndex - thumbnailIndex) * fullThumbnailSize;

				if (scrollValue - decreasingIndex >= 0) {
					scrollValue -=
						(previousThumbnailIndex - thumbnailIndex) * fullThumbnailSize;
					otherPhotosBox.scrollTo(scrollValue, 0);
				}
			} else if (previousThumbnailIndex < thumbnailIndex) {
				increasingIndex =
					(thumbnailIndex - previousThumbnailIndex) * fullThumbnailSize;
				if (scrollValue + increasingIndex < otherPhotosBox.scrollWidth) {
					scrollValue +=
						(thumbnailIndex - previousThumbnailIndex) * fullThumbnailSize;
					otherPhotosBox.scrollTo(scrollValue, 0);
				}
			}
		});
	});
};
const showNextPhoto = () => {
	if (photoIndex < pathCollection.length - 1) {
		thumbnailPhotoBox[photoIndex].classList.remove('active');
		previousPhotoIndex = photoIndex;
		previousThumbnailIndex = thumbnailIndex;
		clearAllActiveThumbnails();
		photoIndex++;
	}
	let nextPhotoPath = pathCollection[photoIndex];
	setRightElementProperties();
	thumbnailIndex = photoIndex;
	mainPhoto.setAttribute('title', 'main photo');

	thumbnailPhotoBox[photoIndex].classList.add('active');
	temporaryImagePath = pathCollection[photoIndex];
	// if (isMobile == false) {
	// 	temporaryImagePath = temporaryImagePath.replace('small', 'big');
	// }
	mainPhoto.setAttribute('src', `${temporaryImagePath}`);

	if (photoIndex == pathCollection.length - 1) {
		increasingIndex = (photoIndex - previousThumbnailIndex) * fullThumbnailSize;

		if (
			previousThumbnailIndex < photoIndex &&
			scrollValue + increasingIndex < otherPhotosBox.scrollWidth
		) {
			scrollValue += increasingIndex;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	} else {
		increasingIndex = (photoIndex - previousThumbnailIndex) * fullThumbnailSize;
		if (
			thumbnailIndex == photoIndex &&
			scrollValue + increasingIndex < otherPhotosBox.scrollWidth
		) {
			scrollValue += increasingIndex;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	}
};
const showPreviousPhoto = () => {
	if (photoIndex > 0) {
		thumbnailPhotoBox[photoIndex].classList.remove('active');
		previousPhotoIndex = photoIndex;
		previousThumbnailIndex = thumbnailIndex;
		clearAllActiveThumbnails();
		photoIndex--;
	}
	setRightElementProperties();
	thumbnailIndex = photoIndex;
	let previousPhotoPath = pathCollection[photoIndex];

	mainPhoto.setAttribute('title', 'main photo');

	thumbnailPhotoBox[photoIndex].classList.add('active');
	temporaryImagePath = pathCollection[photoIndex];
	// if (isMobile == false) {
	// 	temporaryImagePath = temporaryImagePath.replace('small', 'big');
	// }
	mainPhoto.setAttribute('src', `${temporaryImagePath}`);

	if (photoIndex == 0) {
		decreasingIndex = (previousThumbnailIndex - photoIndex) * fullThumbnailSize;
		if (
			previousThumbnailIndex > photoIndex &&
			scrollValue - decreasingIndex >= 0
		) {
			scrollValue -= decreasingIndex;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	} else {
		decreasingIndex = (previousThumbnailIndex - photoIndex) * fullThumbnailSize;
		if (thumbnailIndex == photoIndex && scrollValue - decreasingIndex >= 0) {
			scrollValue -= decreasingIndex;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	}
};

const showNextThumbnail = () => {
	if (thumbnailIndex < pathCollection.length - 1) {
		thumbnailPhotoBox[thumbnailIndex].classList.remove('active');
		clearAllActiveThumbnails();
		setRightElementProperties();
		thumbnailIndex++;
	}
	thumbnailPhotoBox[thumbnailIndex].classList.add('active');
	if (thumbnailIndex == pathCollection.length - 1) {
		increasingIndex = fullThumbnailSize;
		if (scrollValue + increasingIndex < otherPhotosBox.scrollWidth) {
			scrollValue += increasingIndex;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	} else {
		increasingIndex = fullThumbnailSize;
		if (scrollValue + increasingIndex < otherPhotosBox.scrollWidth) {
			scrollValue += increasingIndex;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	}
};
const showPreviousThumbnail = () => {
	if (thumbnailIndex > 0) {
		thumbnailPhotoBox[thumbnailIndex].classList.remove('active');
		clearAllActiveThumbnails();
		setRightElementProperties();
		thumbnailIndex--;
	}
	thumbnailPhotoBox[thumbnailIndex].classList.add('active');

	if (thumbnailIndex == 0) {
		decreasingIndex = fullThumbnailSize;
		if (scrollValue - decreasingIndex >= 0) {
			scrollValue -= decreasingIndex;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	} else {
		decreasingIndex = fullThumbnailSize;
		if (scrollValue - decreasingIndex >= 0) {
			scrollValue -= decreasingIndex;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	}
};
const checkSwipeDirection = () => {
	if (
		touchstart > touchend &&
		Math.abs(touchstart - touchend) > 100 &&
		window.innerWidth < 1200
	) {
		showNextPhoto();
	} else if (
		touchstart < touchend &&
		Math.abs(touchend - touchstart) > 100 &&
		window.innerWidth < 1200
	) {
		showPreviousPhoto();
	}
};

changeMainPhoto();
document.addEventListener('DOMContentLoaded', collectAllPathsInfo);
document.addEventListener('DOMContentLoaded', setRightElementProperties);
document.addEventListener('resize', setRightElementProperties);
bigRightArrow.addEventListener('click', showNextPhoto);
bigRightArrowPc.addEventListener('click', showNextPhoto);
mainPhoto.addEventListener('swipe', showNextPhoto);
bigLeftArrow.addEventListener('click', showPreviousPhoto);
bigLeftArrowPc.addEventListener('click', showPreviousPhoto);
bigLeftArrowM.addEventListener('click', showPreviousPhoto);
bigRightArrowM.addEventListener('click', showNextPhoto);

photoBox.addEventListener('touchstart', (e) => {
	touchstart = e.changedTouches[0].screenX;
});
photoBox.addEventListener('touchend', (e) => {
	touchend = e.changedTouches[0].screenX;
	checkSwipeDirection();
});

// const showBigBigImg = (img) => {
// 	if (window.innerWidth > 1000) {
// 		console.log(img);
// 		fullImgContainer.style.transform = 'scale(1)';
// 		bigbig.classList.add('showFullImg');
// 		console.log(img.getAttribute('src'));
// 		console.log(fullImg);
// 		fullImg.setAttribute('src', `${img.getAttribute('src')}`);
// 		bodyelement.style.overflow = 'hidden';
// 	}
// };

// bigbigButton.addEventListener('click', () => {
// 	if (bigbig.classList.contains('showFullImg')) {
// 		fullImgContainer.style.transform = 'scale(0.4)';
// 		bigbig.classList.remove('showFullImg');
// 		bodyelement.style.overflow = 'visible';
// 	}
// });

// document.addEventListener('keydown', function (event) {
// 	if (event.key === 'Escape') {
// 		if (bigbig.classList.contains('showFullImg')) {
// 			bigbig.classList.remove('showFullImg');
// 			fullImgContainer.style.transform = 'scale(0.4)';
// 			bodyelement.style.overflow = 'visible';
// 		}
// 	}
// });
