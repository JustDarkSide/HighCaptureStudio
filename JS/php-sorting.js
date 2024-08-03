let productsBox = document.querySelector(".products__box"); //EXTERNAL DIV FOR PRODUCT ELEMENTS
let productSelectBox = document.querySelector(".products-select-box"); //EXTERNAL DIV FOR SELECT LISTS
let currentUrl = window.location.href; // CURRENT URL
let allClassButtons = document.querySelectorAll(".products__class-button"); //CLASS BUTTONS TO SORT PRODUCTS

let woodname = document.querySelector(".products__select-list--two"); //SELECT LIST FOR WOODNAME
let select = document.querySelector("select"); //ALL SELECT TAGS
let btnValue; //VALUE FROM ONE OF CLASS BUTTONS
let aClassBtn = document.querySelector(".products__class-buttons-a1"); //A1 CLASS BUTTON
let classValueForRequest = localStorage.getItem("classValue"); // ??
localStorage.setItem("btnValue", classValueForRequest); //SETTING NEW VALUE IN LOCALSTORAGE
let digits = currentUrl.match(/\d/g); //CURRENT URL DIGITS FILTER

function getContent() {
	let category = digits[0];
	let subcategory = digits[1];
	let woodnameValue = woodname.value;

	let activatedButton = document.querySelector(
		".products__class-button.activated"
	);


	if (!isNaN(localStorage.getItem("btnValue"))) {
		btnValue = activatedButton.textContent;
		btnValue = btnValue.replace(" ", "_");
	}

	let data = {
		category: category,
		subcategory: subcategory,
		woodname: woodnameValue,
		class: btnValue,
	};

	// Convert object to JSON string
	let jsonData = JSON.stringify(data);

	// Create an AJAX request
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "../../../../html/products/generateProducts.php", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				// Handle successful response
				// Render received content dynamically'
				productsBox.innerHTML = xhr.responseText;
			} else {
				console.error(xhr.statusText);
				// Handle error
				console.error("AJAX request failed");
			}
		}
	};
	xhr.send(jsonData);
}

select.addEventListener("change", getContent);

allClassButtons.forEach((button) => {
	button.addEventListener("click", function () {
		getContent();
	});
});

document.addEventListener("DOMContentLoaded", () => {
	getContent();
});

window.addEventListener("unload", function () {
	localStorage.removeItem("btnValue");
	localStorage.removeItem("selectedButton");
	localStorage.removeItem("classValue");
	select.selectedIndex = 0;
});
