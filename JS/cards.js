let videoDiv = document.querySelectorAll('.video__element');
let videoDescription = document.querySelectorAll('.video__additional__content');
let seeMore = document.querySelectorAll('.click__to__see');

// const showDescription = (element) => {
// 	console.log(element);
// 	element.classlist.add('showDescription');
seeMore.forEach((item) => {
	item.addEventListener('click', () => {
		item.parentElement.previousElementSibling.style.opacity = 0;
		item.parentElement.classList.add('showDescription');
	});
});
