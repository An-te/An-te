export default function (sketch) {
	let t = 0;
	const e = (a = 0, x = 0) =>
		x < 500 &&
		e(sketch.sin(a | (x - t)) + 3, x + a) +
			sketch.rect(x / 2 + 80, ((t / a + a * x) % 150) - x / 7 + 95, 2, 15 / a);

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.noLoop();
	};

	sketch.draw = () => {
		t++;
		sketch.background(9);
		sketch.fill(255, 96);
		sketch.translate(50, -50);
		sketch.shearY(0.3);
		sketch.text(`${"❀❂"[(t / 10) & 1]}\n${"➡✕"[(t / 50) & 1]}\n｜`, 220, 140);
		e();
		sketch.shearX(-0.5);
		for (let i = 8; i--; ) sketch.rect(i * 6 + 265, 180, 5, 20);
	};
}