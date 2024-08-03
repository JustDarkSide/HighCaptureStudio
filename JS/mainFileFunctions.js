const mbNav = document.querySelector('.mobile-nav'); // MOBILE NAV
const bBtn = document.querySelector('.burger-btn'); //BURGER BTN
const allNavItems = document.querySelectorAll('.mb-nav__item'); //ALL ITEMS IN MOBILE NAV
const navSpace = document.querySelector('.nav'); // MOST EXTERNAL PARENT FOR REST OF NAVIGATION DIVS
const offsetDiv = document.querySelector('.offset'); //BLACK SPACE AFTER CLICKING BURGER BUTTON
const logoImg = document.querySelector('.solo-logo-item-img'); // MOBILE LOGO
const headerImage = document.querySelector('.header__carousel-photo--photo1'); //EXTERNAL DIV FOR THE VIDEO, NEED TO CHANGE THE CLASSNAME!
let headerVideo = document.querySelector('.header__carousel-video'); //HEADER VIDEO
const header = document.querySelector('.header'); //MOST EXTERNAL HEADER DIV
const cardsTextSections = document.querySelectorAll('.cards__item-text'); //PART OF THE CARD WE SEE ON THE BOTTOM (CLICK MORE ETC.)
const allLinksInCards = document.querySelectorAll('.cards__item a');
let cardNumber = 0; //CARD INDEX TO FUNCTION (UNUSED)
let navBar = document.querySelector('.nav'); //MOST EXTERNAL PARENT FOR REST OF NAVIGATION DIVS
let navHeight = parseInt(
	window.getComputedStyle(navBar).getPropertyValue('height').replace('px', '')
);
let xSign = document.querySelector('.burger-btn__x');
let bars = document.querySelector('.burger-btn__bars');
//HEIGHT OF NAVIGATION (UNUSED)
let carousel = document.querySelector('.header'); //MOST EXTERNAL PARENT FOR THE REST OF HEADER
let carouselHeight = parseInt(
	window.getComputedStyle(carousel).getPropertyValue('height').replace('px', '') //HEIGHT OF CAROUSEL
);
let firewoodSection = document.querySelector('.firewood'); //FIREWOOD SECTION
let kindlingSection = document.querySelector('.kindling'); //KINDLING SECTION
let briquetteSection = document.querySelector('.briquette'); //BRIQUETTE SECTION
let pelletSection = document.querySelector('.pellet'); //PELLET SECTION
let cardItems = document.querySelectorAll('.cards__item'); //ALL CARDS
let reduceAnimationThreshold = navHeight * 2;
let summaryTopOffset =
	cardItems[cardNumber].offsetTop +
	carouselHeight -
	navHeight -
	reduceAnimationThreshold; //SUMMARY CARD HEIGHT (USUSED)

const mobileOfferMainItem = document.querySelector(
	'.dropdown__mobile--mainDropdownItem'
); // OFFER ELEMENT
const dropdownMobileIcon = document.querySelector('.dropdown__mobile-icon'); //PLUS/MINUS DIV
const dropdownSectionMobile = document.querySelector('.dropdown__mobile'); //DROPDOWN MOBILE SECTION
const dropdownListMobile = document.querySelector(
	'.dropdown__mobile .dropdown__mobile-list'
); //ENTIRE LIST
const dropdownMobilePlusIcon = document.querySelector('.plus'); //PLUS ICON
const dropdownMobileMinusIcon = document.querySelector('.minus'); //MINUS ICON
const dropdownMobileItems = document.querySelectorAll(
	'.dropdown__mobile-list-item'
); //ALL DROPDOWN ITEMS
const footerDate = document.querySelector('.footer__date'); //DATE IN FOOTER

let i = 1; //INDEX (ANY FUNCTION)
let y = 0; //INDEX (ANY FUNCTION)
let firstVideoDuration = headerVideo.duration * 1000;
let videoDuration = 0;
//-------------NAV--------------
const offsetTimeout = () => {
	setTimeout(() => {
		if (mbNav.classList.contains('mobile-nav--active')) {
			offsetDiv.classList.add('showShadow');
			offsetDiv.classList.remove('hideShadow');
		} else {
			offsetDiv.classList.remove('showShadow');
			offsetDiv.classList.add('hideShadow');
		}
	}, 50);
};
const lockTouch = (event) => {
	if (mbNav.classList.contains('mobile-nav--active')) {
		event.preventDefault();
	}
};
const unlockTouch = (event) => {
	if (!mbNav.classList.contains('mobile-nav--active')) {
		return true;
	}
};
const handleNav = () => {
	document.body.classList.toggle('mobileMenuLock');
	xSign.classList.toggle('x-sign-activated');
	bars.classList.toggle('bars-disabled');
	mbNav.classList.toggle('mobile-nav--active');
	offsetTimeout();

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			if (!item.firstElementChild.classList.contains('dropdown__mobile')) {
				mbNav.classList.remove('mobile-nav--active');
				document.body.classList.remove('mobileMenuLock');
				xSign.classList.remove('x-sign-activated');
				bars.classList.remove('bars-disabled');
				offsetTimeout();
			}
		});
	});
	dropdownMobileItems.forEach((item) => {
		item.addEventListener('click', () => {
			mbNav.classList.remove('mobile-nav--active');
			document.body.classList.remove('mobileMenuLock');
			xSign.classList.remove('x-sign-activated');
			bars.classList.remove('bars-disabled');

			offsetTimeout();
		});
	});
};

//-------------HEADER-----------------

const checkScreenWidth = () => {
	if (window.innerWidth >= 768) {
		dropdownMobilePlusIcon.setAttribute(
			'src',
			'./img/mutual/nav/icons/navMediumBreakpointIcons/plus-medium.svg'
		);
		dropdownMobileMinusIcon.setAttribute(
			'src',
			'./img/mutual/nav/icons/navMediumBreakpointIcons/minus-medium.svg'
		);
	} else {
		dropdownMobilePlusIcon.setAttribute(
			'src',
			'./img/mutual/nav/icons/navmobileicons/plus-small.svg'
		);
		dropdownMobileMinusIcon.setAttribute(
			'src',
			'./img/mutual/nav/icons/navmobileicons/minus-small.svg'
		);
	}

	if (window.innerWidth >= 400 && window.innerWidth < 768) {
		logoImg.setAttribute('src', './img/mutual/nav/logo/logo127x70.png');
	} else if (window.innerWidth >= 768) {
		logoImg.setAttribute('src', './img/mutual/nav/logo/logo164x90.png');
	}
};

const showDropdownElementsMobile = () => {
	dropdownListMobile.classList.toggle('dropdown__mobile-list--active');
	dropdownMobilePlusIcon.classList.toggle('showProperMobileDropdownIcon');
	dropdownMobileMinusIcon.classList.toggle('showProperMobileDropdownIcon');
	dropdownSectionMobile.classList.toggle('dropdown__mobile--active');
};
// ----------------------------FOOTER-------------------------------------------
const footerDateFunction = () => {
	const dateYear = new Date();
	footerDate.textContent = dateYear.getFullYear();
};
const checkHeaderHeight = () => {
	if (window.innerWidth >= 768) {
		header.style.height = 'calc(60vh - 120px)';
	} else {
		header.style.height = 'calc(60vh - 90px)';
	}
};
const checkDurationOfFirstVideo = () => {
	headerVideo.oncanplay = function () {
		firstVideoDuration = headerVideo.duration * 1000;
		setTimeout(showAndHidePhotos, firstVideoDuration - 1300);
	};
};
const showAndHidePhotos = () => {
	headerImage.classList.toggle('show');
	headerImage.classList.toggle('hide');
	if (i == 2) {
		i = 0;
	}
	i++;
	setTimeout(() => {
		if (window.innerWidth > 768) {
			console.log(i);
			headerVideo.setAttribute(
				'src',
				`../img/mainpage/headervideo/carousel-item${i}-big.mp4`
			);
		} else {
			console.log(i);
			headerVideo.setAttribute(
				'src',
				`../img/mainpage/headervideo/carousel-item${i}-small.mp4`
			);
		}
		headerVideo.oncanplay = function () {
			videoDuration = headerVideo.duration * 1000;
			console.log(videoDuration);
			setTimeout(() => {
				headerImage.classList.toggle('show');
				headerImage.classList.toggle('hide');
			}, 100);
			setTimeout(showAndHidePhotos, videoDuration - 1300);
		};
	}, 1300);
	headerVideo = document.querySelector('.header__carousel-video');
};
const scaleUpOrDown = () => {
	allLinksInCards.forEach((link) => {
		link.addEventListener('focus', () => {
			link.parentElement.style.scale = 1.06;
		});
		link.addEventListener('focusout', () => {
			link.parentElement.style.scale = 1;
		});
	});
};
document.addEventListener('DOMContentLoaded', checkDurationOfFirstVideo);
document.addEventListener('DOMContentLoaded', checkHeaderHeight);
window.addEventListener('resize', checkHeaderHeight);
document.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
bBtn.addEventListener('click', handleNav);
dropdownMobileIcon.addEventListener('click', showDropdownElementsMobile);
mobileOfferMainItem.addEventListener('click', showDropdownElementsMobile);
offsetDiv.addEventListener('click', () => {
	mbNav.classList.remove('mobile-nav--active');
	xSign.classList.remove('x-sign-activated');
	bars.classList.remove('bars-disabled');
	document.body.classList.remove('mobileMenuLock');

	offsetTimeout();
});
document.addEventListener('touchmove', lockTouch, { passive: false });
document.addEventListener('touchmove', unlockTouch, { passive: false });
document.addEventListener('DOMContentLoaded', footerDateFunction);
document.addEventListener('DOMContentLoaded', scaleUpOrDown);
