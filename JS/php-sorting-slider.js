let isMobileVariable;
const checkifMobile = () => {
	if (window.innerWidth < 1200) {
		isMobileVariable = true;
	} else {
		isMobileVariable = false;
	}
	let parameter = {
		isMobile: isMobileVariable,
	};
	let jsonData2 = JSON.stringify(parameter);
	let xhr2 = new XMLHttpRequest();
	xhr2.open('POST', '../../../html/slider/sliderOfProduct.php', true);
	xhr2.setRequestHeader('Content-Type', 'application/json');
	xhr2.onreadystatechange = function () {
		if (xhr2.readyState === XMLHttpRequest.DONE) {
			if (xhr2.status === 200) {
				// Handle successful response
				// Render received content dynamically'
			} else {
				console.error(xhr2.statusText);
				// Handle error
				console.error('AJAX request failed');
			}
		}
	};
	xhr2.send(jsonData2);
};
checkifMobile();
