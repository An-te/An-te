import createDetail from "./createDetail.js";
import createP from "./createP.js";

export default function (id, f, t, d) {
	const newDiv = document.createElement("div");
	newDiv.className = "child";
	newDiv.id = id;

	const detail = createDetail("", d);
	const content = createP(t);
	newDiv.appendChild(detail);
	newDiv.appendChild(content);

	const currentDiv = document.getElementById("parent");
	currentDiv.appendChild(newDiv);

	const p = new p5(f, document.getElementById(id));

	p.canvas.addEventListener("click", () =>
		p.isLooping() === true ? p.noLoop() : p.loop(),
	);

	const observer = new IntersectionObserver((entries, observer) => {
		const entry = entries[0];
		if (entry.isIntersecting) {
			p.loop();
			entry.target.classList.add("anim");
		} else {
			p.noLoop();
			entry.target.classList.remove("anim");
		}
	});
	observer.observe(p.canvas);
}
