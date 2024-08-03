let premium = document.querySelector(".products__class-buttons-premium");
let a1 = document.querySelector(".products__class-buttons-a1");

let allButtons = document.querySelectorAll(".products__class-button");

let url = window.location.href;
let filter = url.match(/\d/g);
let classValue = filter[2];
localStorage.setItem("classValue", classValue);
localStorage.setItem("selectedButton", classValue);

function buttons() {
	if (localStorage.getItem("selectedButton")) {
		if (localStorage.getItem("selectedButton")) {
			allButtons[
				parseInt(localStorage.getItem("selectedButton"))
			].classList.add("activated");
		}
	} else {
		if (localStorage.getItem("classValue")) {
			allButtons[parseInt(localStorage.getItem("classValue"))].classList.add(
				"activated"
			);
		}
	}
	setTimeout(() => {
		allButtons.forEach((element) => {
			element.style.pointerEvents = "auto";
		});
	}, 500);
}

allButtons.forEach((button) => {
	button.addEventListener("click", function () {
		if (button.classList.contains("activated")) {
			return;
		} else {
			allButtons.forEach((element) => {
				element.classList.remove("activated");
			});
			button.classList.add("activated");
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
	buttons();
});
