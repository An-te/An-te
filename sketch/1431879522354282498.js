export default function (sketch) {
	let t = 0;

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (sketch.frameCount === 1) return;
		t++;
		sketch.background(248);
		const _ = [...Array(8)].map((e, i) =>
			new p5.Vector(180).rotate((i * sketch.TAU) / 8).add(250, 200),
		);
		for (let q = 50; q--; ) {
			let i = 0;
			for (const [a, b] of _.map((a, i) => [a, _[-~i % 8]])) {
				sketch.line(a.x, a.y, b.x, b.y);
				_[i++] = p5.Vector.sub(
					a,
					p5.Vector.sub(a, b).mult(
						sketch.sin((i * q) / 90 - (t * sketch.PI) / 100) ** 3 / 2 + 0.5,
					),
				);
			}
		}
	};
}
