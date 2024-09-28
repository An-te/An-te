export default function (text) {
	const newContent = document.createElement("p");
	newContent.textContent = text;
	return newContent;
}