import Sketch from "./sketch/sketch.js";
import cssAnimation from "./cssAnimation.js";

document.body.onload = addElement;

function addElement() {
	p5.prototype.shuffle(Sketch, true);
	for (const [i, { func, t, text, img, type }] of Sketch.entries()) {
		switch (type) {
			case "p5js":
				addP5js(`p5Sketch${i}`, func, t, text);
				break;
			case "img":
				addImg(img);
				break;
			default:
		}
	}

	let anim = cssAnimation().keyframe;
	anim = p5.prototype.shuffle(anim)[0];
	document.styleSheets[0].insertRule(anim);
	// var div = document.getElementById('anim');
	// div.style.animation = 'anim 1s linear forwards';
}

function createDetail(summary, detail) {
	const newDiv = document.createElement("div");
	newDiv.className = "detail";
	const newDetail = document.createElement("details");
	const newSummary = document.createElement("summary");
	newSummary.textContent = summary;
	newDetail.textContent = detail;
	newDetail.appendChild(newSummary);
	newDiv.appendChild(newDetail);
	return newDiv;
}

function createP(text) {
	const newContent = document.createElement("p");
	newContent.textContent = text;
	return newContent;
}

function addP5js(id, f, t, d) {
	const newDiv = document.createElement("div");
	newDiv.className = "child";
	newDiv.id = id;

	const detail = createDetail("", d);
	const content = createP(t);
	newDiv.appendChild(detail);
	newDiv.appendChild(content);

	const currentDiv = document.getElementById("parent");
	currentDiv.appendChild(newDiv);

	const p = new p5(f, document.getElementById(id));

	p.canvas.addEventListener("click", () =>
		p.isLooping() === true ? p.noLoop() : p.loop(),
	);

	const observer = new IntersectionObserver((entries, observer) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				p.loop();
				entry.target.classList.add("anim");
			} else {
				p.noLoop();
				entry.target.classList.remove("anim");
			}
		}
	});
	observer.observe(p.canvas);
}

function addImg(img) {
	const newDiv = document.createElement("div");
	newDiv.className = "child";

	const newContent = new Image();
	newContent.src = img;
	newDiv.appendChild(newContent);

	const currentDiv = document.getElementById("parent");
	currentDiv.appendChild(newDiv);
}
