export default function (sketch) {
	let t = 0;
	const n = 100;

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (sketch.frameCount === 1) return;
		t++;
		sketch.background(252);
		let r = 0;
		let x = 100;
		let y = 0;

		for (let i = n * 9; i--; ) {
			sketch.push();
			r -= i & (x % (n / 2)) ? 0 : sketch.PI / 3;
			x += sketch.sin(r);
			y += sketch.cos(r);
			sketch.applyMatrix(2, 0.8, 0.2, 2, x * 2 + 80, y * 2 + 70);
			sketch.text(
				"⳦."[(t + i) % n ? 1 : 0],
				sketch.min(sketch.tan(((t + (i >> 3)) * sketch.PI) / 75) ** 4, 1) * 60,
				0,
			);
			sketch.pop();
		}
	};
}
