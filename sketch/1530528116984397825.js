export default function (sketch) {
	const w = 500;
	const n = 1 / 40;
	let t = 0;
	const k = (x) => {
		const a = sketch.sin(x * 6) * 99 + (x * w) / 2;
		const m = 5 / x;
		const h = a - m;
		const c = -x * 160 - m;
		x > 0 &&
			sketch.noFill(m, a) +
				sketch.line(h, m, w, m) +
				sketch.rect(h, c, m / 2, m / 9) +
				sketch.rect(h, m, 1, c - m) +
				sketch.arc(x * 90 - m, 9, m, m, sketch.PI, 0) +
				k(x - n);
	};

	sketch.setup = () => {
		sketch.createCanvas(w, 300);
		sketch.noLoop();
	};
	sketch.draw = () => {
		if (t > 0) {
			sketch.background(241);
			sketch.translate(w / 2, w / 2);
			k(2 - (t % 1) * n);
			sketch.circle(0, -199, 60);
		}
		t += 0.03;
	};
}
