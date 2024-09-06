export default function (sketch) {
	let t = 0;
	const p = 6;
	const q = 5;
	// p=4,q=5;
	const m = sketch.createVector();
	const e = (a, b) =>
		sketch
			.createVector(0, a * 40)
			.sub(m)
			.rotate((b * sketch.TAU) / p)
			.add(250, 150);

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (sketch.frameCount === 1) return;
		t++;
		sketch.background(248);
		m.sub(
			m
				.copy()
				.sub(
					[
						[0, 0],
						[142, 86],
						[50, 80],
						[0, 160],
					][(t / 50) & 3],
				)
				.div(9),
		);
		for (let j = p * q; j--; ) {
			const i = (j / p) ^ 0;
			const a = e(i, j);
			const b = e(~-q - i, -~j);
			sketch.line(a.x, a.y, b.x, b.y);
		}
	};
}
