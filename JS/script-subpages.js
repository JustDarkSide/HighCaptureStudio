const mbNav = document.querySelector('.mobile-nav'); // MOBILE NAV
const bBtn = document.querySelector('.burger-btn'); //BURGER BTN

const allNavItems = document.querySelectorAll('.mb-nav__item'); //ALL ITEMS IN MOBILE NAV
const navSpace = document.querySelector('.nav'); // MOST EXTERNAL PARENT FOR REST OF NAVIGATION DIVS
const offsetDiv = document.querySelector('.offset'); //BLACK SPACE AFTER CLICKING BURGER BUTTON
const logoImg = document.querySelector('.solo-logo-item-img'); // MOBILE LOGO

// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL) !!!
const mobileOfferMainItem = document.querySelector(
	'.dropdown__mobile--mainDropdownItem'
);
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
let isMobileNavOpened = false;
let xSign = document.querySelector('.burger-btn__x');
let bars = document.querySelector('.burger-btn__bars');
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
		// ścieżki się różnią w plikach z produktami
		dropdownMobilePlusIcon.setAttribute(
			'src',
			'../../../img/mutual/nav/icons/navMediumBreakpointIcons/plus-medium.svg'
		);
		dropdownMobileMinusIcon.setAttribute(
			'src',
			'../../../img/mutual/nav/icons/navMediumBreakpointIcons/minus-medium.svg'
		);
	} else {
		dropdownMobilePlusIcon.setAttribute(
			'src',
			'../../../img/mutual/nav/icons/navmobileicons/plus-small.svg'
		);
		dropdownMobileMinusIcon.setAttribute(
			'src',
			'../../../img/mutual/nav/icons/navmobileicons/minus-small.svg'
		);
	}

	if (window.innerWidth >= 400 && window.innerWidth < 768) {
		logoImg.setAttribute('src', '../../../img/mutual/nav/logo/logo127x70.png');
	} else if (window.innerWidth >= 768) {
		logoImg.setAttribute('src', '../../../img/mutual/nav/logo/logo164x90.png');
	}
};

const showDropdownElementsMobile = () => {
	dropdownListMobile.classList.toggle('dropdown__mobile-list--active');
	dropdownMobilePlusIcon.classList.toggle('showProperMobileDropdownIcon');
	dropdownMobileMinusIcon.classList.toggle('showProperMobileDropdownIcon');
	dropdownSectionMobile.classList.toggle('dropdown__mobile--active');
};

const footerDateFunction = () => {
	const dateYear = new Date();
	footerDate.textContent = dateYear.getFullYear();
};

//--------------EVENTS----------------
document.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
bBtn.addEventListener('click', handleNav);
dropdownMobileIcon.addEventListener('click', showDropdownElementsMobile);
mobileOfferMainItem.addEventListener('click', showDropdownElementsMobile);
offsetDiv.addEventListener('click', () => {
	mbNav.classList.remove('mobile-nav--active');
	document.body.classList.remove('mobileMenuLock');
	xSign.classList.remove('x-sign-activated');
	bars.classList.remove('bars-disabled');
	offsetTimeout();
});
document.addEventListener('touchmove', lockTouch, { passive: false });
document.addEventListener('touchmove', unlockTouch, { passive: false });
document.addEventListener('DOMContentLoaded', footerDateFunction);
