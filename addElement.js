import Sketch from "./sketch/sketch.js";
import cssAnimation from "./cssAnimation.js";
import createP5 from "./js/createP5.js";
import createImg from "./js/createImg.js";
import createTxt from "./js/createTxt.js";

document.body.onload = addElement;

function addElement() {
	p5.prototype.shuffle(Sketch, true);
	for (const [i, { func, t, text, img, type }] of Sketch.entries()) {
		switch (type) {
			case "p5js":
				createP5(`p5Sketch${i}`, func, t, text);
				break;
			case "img":
				createImg(img);
				break;
			case "txt":
				createTxt(text);
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
