export default function (sketch) {
	let t = 0;
	let $ = [];

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.background(14);
		sketch.noLoop();
	};

	sketch.draw = () => {
		t++;
		sketch.background(0, 9);
		sketch.stroke(255, 96);
		$ = [
			...$.slice(-2e3),
			...[..."##########"].map(() => p5.Vector.random3D()),
		];
		$.map((v) => {
			const k = v.x + 5 + v.y;
			const r = 9 * (((v.x * k) ^ (v.y * k + t / 90)) & 7) - 0.1;
			v.x += sketch.sin(r * v.y) / 119;
			v.y += sketch.cos(v.x * r) / 119;
			sketch.point(v.x * 119 + sketch.width / 2, v.y * 119 + 200);
		});
	};
}
