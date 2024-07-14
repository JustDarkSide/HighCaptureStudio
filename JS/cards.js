let videoDiv = document.querySelectorAll('.video__element');
let videoDescription = document.querySelectorAll('.video__additional__content');
let seeMore = document.querySelectorAll('.click__to__see');

seeMore.forEach((item) => {
	item.addEventListener('click', () => {
		// if (
		// 	item.previousElementSibling.firstElementChild.classList.contains(
		// 		'showDescription'
		// 	)
		// ) {
		// 	item.previousElementSibling.firstElementChild.classList.remove(
		// 		'showDescription'
		// 	);
		// 	item.previousElementSibling.firstElementChild.classList.add(
		// 		'hideDescription'
		// 	);
		// 	item.firstElementChild.textContent = 'O projekcie';
		// } else {
		// 	item.previousElementSibling.firstElementChild.classList.remove(
		// 		'hideDescription'
		// 	);
		// 	item.previousElementSibling.firstElementChild.classList.add(
		// 		'showDescription'
		// 	);
		// 	item.firstElementChild.textContent = 'Zobacz video';
		// }
		item.firstElementChild.setAttribute('src', '');
	});
});
