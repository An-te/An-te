export default function (text) {
	const newDiv = document.createElement("div");
	newDiv.className = "child";
	const newContent = document.createElement("span");
	newContent.textContent = text;
	newDiv.appendChild(newContent);
	const currentDiv = document.getElementById("parent");
	currentDiv.appendChild(newDiv);
}