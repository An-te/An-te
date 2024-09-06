export default function (sketch) {
	let t = 0;
	const s = 5;

	function a(x, y) {
		const k = 500 * sketch.noise(t) - x;
		const e = 300 * sketch.noise(t, 9) - y;
		const d = -sketch.exp(
			-sketch.mag(k, e) / (1 + 45 * sketch.noise(x / 30, y / 30)) + 0.5,
		);
		return [x + k * d, y + e * d];
	}

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (sketch.frameCount === 1) return;
		t += 0.02;
		sketch.background(248);
		sketch.noFill();
		sketch.background(248);
		for (let y = 50; y < 300; y += s)
			for (let x = 100; x < 400; x += s)
				sketch.triangle(...[a(x, y), a(x, y + s), a(x + s, y)].flat());
	};
}
