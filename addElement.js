import Sketch from "./sketch/sketch.js";
import createP5 from "./js/createP5.js";
import createImg from "./js/createImg.js";
import createTxt from "./js/createTxt.js";

document.body.onload = addElement;

function addElement() {
	p5.prototype.shuffle(Sketch, true);

	const obAnimation = keyFrameAnimation("p5Anim");
	obAnimation.css.map((e) => document.styleSheets[0].insertRule(e));

	for (const [i, { func, t, text, img, type }] of Sketch.entries()) {
		switch (type) {
			case "p5js":
				createP5(`p5Sketch${i}`, func, t, text, obAnimation.name);
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
}

function keyFrameAnimation(cls) {
	const k = [
		"from { filter: blur(10px) invert(100%); } to { filter: blur(0px); }",
		"from { filter: blur(10px); } to { filter: blur(0px) invert(100%); }",
		"from { filter: blur(10px); } ",
	];

	const css = (n, k) => [
		`.${n} { animation: ${n} 3s forwards; }`,
		`@keyframes ${n} { ${k} }`,
	];

	const keyframe = p5.prototype.shuffle(k)[0];

	return {
		name: cls,
		css: css(cls, keyframe),
	};
}
