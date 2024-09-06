export default function (sketch) {
	const n = 226;
	const s = new Set([...Array(25)].map((_, i) => (((n / i) % 1) * n) | 0));
	let x = 161;
	let y = 136;
	let t = 0;
	let r = 0;

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (sketch.frameCount === 1) return;
		t++;
		sketch.background(248);
		for (let i = n * 6; i--; ) {
			r += (s.has(i % n) * sketch.PI) / 3;
			x += sketch.sin(r);
			y += sketch.cos(r);
			const d =
				(sketch.noise((y + t + i) >> 4) * 2 - 1) *
				sketch.min(sketch.tan((t * sketch.PI) / 75) ** 4, 1) *
				200;
			sketch.rect(x * 2 + d, y * 2 - 50, d / 5);
		}
	};
}
