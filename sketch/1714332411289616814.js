export default function (sketch) {
	let t = 0;
	let $ = [];

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.background(9);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (sketch.frameCount === 1) return;
		t++;
		sketch.background(0, 14);
		$ = [
			...$.slice(-2e3),
			...[..."##########"].map(() => p5.Vector.random3D()),
		];
		sketch.stroke(255);
		$.map((v) => {
			const k = (v.x + 1) ^ (((t / 90) % 7) + v.y);
			const r = (((v.x * 2 * k) ^ (v.y * k + 3)) & 1) * 2 - 1;
			v.x += (sketch.sin(r) / 60) * v.z;
			v.y += (sketch.cos(r) / 60) * v.z;
			sketch.point(v.x * 80 + 250, v.y * 80 + 150);
		});
	};
}
