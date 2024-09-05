export default function (sketch) {
	let t = 0;
	const l = [-1, 0, 1];
	const s = 80;
	const e = 1 / 25;
	const F = (n) => {
		if (!(n < 1 && sketch.box(n * 3))) {
			for (const x of l)
				for (const y of l) {
					sketch.push();
					x + 1 === (((t * e) % 3) ^ 0) &&
						n === s &&
						sketch.rotateX(t * sketch.PI * e);
					sketch.translate(x * n, y * n);
					x & y || F(n / 3);
					sketch.pop();
				}
		}
	};

	sketch.setup = () => {
		sketch.createCanvas(500, 300, sketch.WEBGL);
		sketch.noLoop();
	};

	sketch.draw = () => {
		t++;
		sketch.background(248);
		sketch.noStroke();
		sketch.fill(0, 96);
		sketch.rotateY((t * e) / 6);
		(t * e) & 1 || sketch.rotate(sketch.PI / 2);
		F(s);
	};
}
