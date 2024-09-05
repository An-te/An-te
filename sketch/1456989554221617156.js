export default function (sketch) {
	let t = 0;
	const W = 500;
	const s = W / 4;
	const F2 = (c, n, m, a) => {
		const k = (c < 0.15) | 0;
		k
			? sketch.circle(n + (a / 2) * k + s, s + m + (a / 2) * k - 100, a)
			: sketch.rect(n + (a / 2) * k + s, s + m + (a / 2) * k - 100, a);
	};
	const F = (a, x = 0, y = 0) =>
		a > 3 &&
		[
			[0, 0],
			[0, a],
			[a, a],
			[a, 0],
		].map(([w, h]) => {
            const n = x + w;
            const m = y + h;
            const c = sketch.noise(n / s * 5, t, t + m * s) ** 2;
			c > 0.2
				? F(a / 2, n, m)
				: sketch.fill(5 / c) + F2(c, n, m, a);
		});

	sketch.setup = () => {
		sketch.createCanvas(W, 300);
		sketch.noLoop();
	};

	sketch.draw = () => {
		t += 0.01;
		sketch.background(240);
		sketch.noStroke();
		F(s);
	};
}
