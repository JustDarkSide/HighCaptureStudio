const setHeight = () => {
	let height = window.innerHeight;
	let width = window.innerWidth;
	let nav = document.querySelector("nav");
	let navHeight = Math.round(
		window.getComputedStyle(nav).getPropertyValue("height").replace("px", "")
	);
	console.log(height);
	console.log(navHeight);
	document.documentElement.style.setProperty("--vh", `${height}px`);
	document.documentElement.style.setProperty("--navHeight", `${navHeight}px`);
	document.documentElement.style.setProperty("--width", `${width}px`);
	document.documentElement.style.setProperty(
		"--reversedWidth",
		`${-1 * width}px`
	);
};

document.addEventListener("DOMContentLoaded", setHeight);
