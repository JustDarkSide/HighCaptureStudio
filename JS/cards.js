let videoDiv = document.querySelectorAll(".video__element");
let videoDescription = document.querySelectorAll(".video__additional__content");
let seeMore = document.querySelectorAll(".click__to__see");

// const showDescription = (element) => {
// 	console.log(element);
// 	element.classlist.add('showDescription');
seeMore.forEach((item) => {
	item.addEventListener("click", () => {
		if (
			item.parentElement.previousElementSibling.classList.contains("rotate")
		) {
			item.parentElement.previousElementSibling.classList.remove("rotate");
			item.previousElementSibling.classList.remove("rotatesecondback");
			item.parentElement.previousElementSibling.classList.add("rotate");
			item.previousElementSibling.classList.add("unrotatecard");
} 





else if (

			item.parentElement.previousElementSibling.classList.contains("rotateback")
		) {
			item.parentElement.previousElementSibling.classList.remove("rotateback");
			item.previousElementSibling.classList.remove("rotatesecondback");
			item.parentElement.previousElementSibling.classList.add("rotate");
			item.previousElementSibling.classList.add("unrotatecard");
		} else {
			item.parentElement.previousElementSibling.classList.add("rotate");
			item.previousElementSibling.classList.add("unrotatecard");
		}
		// item.previousElementSibling.classList.add("rotatesecondback");
		// item.previousElementSibling.classList.remove("unrotatecard");
	});
});
