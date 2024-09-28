export default function (img) {
	const newDiv = document.createElement("div");
	newDiv.className = "child";

	const newContent = new Image();
	newContent.src = img;
	newDiv.appendChild(newContent);

	const currentDiv = document.getElementById("parent");
	currentDiv.appendChild(newDiv);

	newDiv.addEventListener("click", open);
	function open(e) {
		if (e.target.nodeName === "IMG") {
			const d = document.createElement("div");
			d.style.backgroundImage = `url("${e.target.src}")`;
			d.classList.add("fullPage");
			newDiv.appendChild(d);
			d.classList.add("imgIn");
			d.addEventListener("click", close);
		}
	}
	function close(e) {
		e.target.removeEventListener("click", close);
		e.target.classList.remove("imgIn");
		e.target.classList.add("imgOut");
		setTimeout(() => {
			newDiv.removeChild(e.target);
		}, 700);
	}
}
