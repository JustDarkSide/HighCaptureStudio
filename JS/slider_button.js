const buttonFunction = (e) => {
	var subject_label_content = e.getAttribute("data-contact_info");
	localStorage.setItem("subject", subject_label_content);
	window.location.href = "/contact";
};
const shareVariable = () => {
	return localStorage.getItem("subject");
};
