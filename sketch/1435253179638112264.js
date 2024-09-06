export default function (sketch) {
	let t = 0;
	const n = 1.9;
	const m = 2;
	const s = 1 / 9;

	sketch.setup = () => {
		sketch.createCanvas(500, 300);
		sketch.noiseSeed(59);
		sketch.noLoop();
	};

	sketch.draw = () => {
		if (sketch.frameCount === 1) return;
		sketch.background(240);
		t += s;
		let c = -m;
		for (let j = -m; j < m; j += s)
			for (let i = -n; i < n; i += s, c++) {
				c % 2 ||
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
								f = sketch.noise(
									sketch.cos(u * 3 + t) + sketch.cos(v * 3 + t),
									sketch.cos(v + t),
								),
								e = sketch.sqrt(u * u + v * v + (c % 8 ? f * 6 : f * 8 - 3))
							]) => [(u / e) * 90 + 250, 200 + (90 * v) / e]
						)
					);
			}
	};
}
