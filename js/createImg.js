export default function (img) {
	const newDiv = document.createElement("div");
	newDiv.className = "child";

	const newContent = new Image();
	newContent.src = img;
	newDiv.appendChild(newContent);

	const currentDiv = document.getElementById("parent");
	currentDiv.appendChild(newDiv);
}