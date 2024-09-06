export default function (sketch) {
	let t = 0;
	const s = 0.25;

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (t++) {
			sketch.stroke(9, 90);
			sketch.background(248);
			for (let j = -2; j < 2; j += s)
				for (let i = -2; i < 2; i += s) {
					sketch.quad(
						...[
							[i, j],
							[i + s, j],
							[i + s, j + s],
							[i, j + s],
						].flatMap(
							([
								u,
								v,
								e = sketch.lerp(
									u * u + v * v + 1,
									1,
									sketch.min(sketch.max(sketch.sin(t * 0.02 + u) * 2, 0), 1),
								),
							]) => [
								((u - v / 2) / e) * 99 + 250,
								200 + (99 * (1 - e + v / 9)) / e,
							],
						),
					);
				}
		}
	};
}
