export default function (sketch) {
	let t = 0;
	const a = 4;
	const F = () => {
		sketch.push();
		for (let i = 0; i < 6 * a; i++) {
			sketch.rotate((sketch.PI / 2) * [2, 4, 5].includes(i / a));
			sketch.box(18, 18, 100);
			(i + t / 5) & a || sketch.box(15, 5, 140);
			sketch.translate(-18, 0, -1.75);
		}
		sketch.pop();
	};

	sketch.setup = () => {
		sketch.createCanvas(500, 300, sketch.WEBGL);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (t++) {
			sketch.background(248);
			sketch.ortho();
			F(sketch.translate(-50, 70, 250));
			F(
				sketch.translate(180, -40) +
					sketch.rotate((sketch.PI * 3) / 8, [1, 0, 0]) +
					sketch.rotate(sketch.PI / 4),
			);
		}
	};
}
