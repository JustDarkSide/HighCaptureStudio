let formInput = document.querySelectorAll(
	"input[type='text'], input[type='phone'], input[type='email'], textarea"
);

formInput.forEach((element) => {
	element.addEventListener("focusout", () => {
		if (element.value != "") {
			element.style.border = "2px solid rgb(223, 174, 14)";
			element.style.outline = "none";
			// element.nextElementSibling.style.transform = "translateY(0)";
			// element.nextElementSibling.style.color = "rgb(223, 174, 14)";
			// element.nextElementSibling.style.backgroundColor = "#333333";
		}
	});
	element.addEventListener("focus", () => {
		element.nextElementSibling.style.transform = "translateY(-120%)";
		element.nextElementSibling.style.color = "rgb(223, 174, 14)";
		element.nextElementSibling.style.backgroundColor = "#333333";
	});
});
