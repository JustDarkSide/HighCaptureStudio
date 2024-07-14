let videoDiv = document.querySelectorAll(".video__element");
let videoDescription = document.querySelectorAll(".video__additional__content");
let seeMore = document.querySelectorAll(".click__to__see");

seeMore.forEach((item) => {
	item.addEventListener("click", () => {
		if (
			item.previousElementSibling.firstElementChild.classList.contains(
				"showDescription"
			)
		) {
			item.previousElementSibling.firstElementChild.classList.remove(
				"showDescription"
			);
			item.previousElementSibling.firstElementChild.classList.add(
				"hideDescription"
			);

			item.firstElementChild.setAttribute("src", "../img/mainpage/info.svg");
		} else {
			item.previousElementSibling.firstElementChild.classList.remove(
				"hideDescription"
			);
			item.previousElementSibling.firstElementChild.classList.add(
				"showDescription"
			);
			item.firstElementChild.setAttribute("src", "../img/mainpage/video.svg");
		}
	});
});
const setOrder = () => {
	for (i = 0; i < videoDescription.length; i++) {
		if (i % 2 == 1) {
			videoDescription[i].style.order = 1;
			videoDiv[i].style.order = 2;
		}
	}
};
document.addEventListener("DOMContentLoaded", setOrder);
