export default function (sketch) {
	let t = 0;
	const s = 0.1;

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.background(14);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (t++) {
			sketch.background(9);
			for (let i = s; i < 2; i += s)
				for (let j = 0; j < sketch.TAU; j += s)
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
								x = u * sketch.sin(v),
								y = u * sketch.cos(v),
								e = sketch.lerp(
									x * x + y * y + 1,
									1,
									sketch.sin(t * 0.02 - u / 2 + j * 6),
								),
							]) => [
								((x - 1) / e) * 99 + 360,
								300 + (99 * (y - 1 - sketch.tan(t * 0.01))) / e,
							],
						),
					);
		}
	};
}
