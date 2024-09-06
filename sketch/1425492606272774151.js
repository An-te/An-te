export default function (sketch) {
	let m;
	let t = 0;
	let _ = [];
	const p = p5.Vector.random3D().mult(160);
	const w = 500;

	sketch.setup = () => {
		sketch.createCanvas(w, 300);
		sketch.noLoop();
	};
	sketch.draw = () => {
		if (t++) {
			sketch.background(238);
			sketch.translate(w / 2, 150);
			sketch.rotate(p.z / 99);
			_ = _[0]
				? _
				: [...Array((t % 17) + 2)].map(() => p5.Vector.random3D().mult(160));
			m = _[0].copy().sub(p).div(6);
			p.add(m);
			_.map((_) => sketch.rect(p.x - _.x, p.y - _.y, w / _.z));
			m.mag(sketch.line(p.x, p.y, 0, 0)) ^ 0 || _.shift();
		}
	};
}
