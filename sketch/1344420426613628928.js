export default function (sketch) {
	let t = 0;
	const a = 4;
	const F = () => {
		sketch.push();
		for (let i = 0; i < 6 * a; i++) {
			sketch.rotate((sketch.PI / 2) * [2, 4, 5].includes(i / a));
			sketch.box(18, 18, 100);
			(i + t / 5) & a || sketch.box(15, 5, 140);
			sketch.translate(-18, 0, -1.75);
		}
		sketch.pop();
	};

	sketch.setup = () => {
		sketch.createCanvas(500, 300, sketch.WEBGL);
		sketch.noLoop();
	};

	sketch.draw = () => {
		t++;
		sketch.background(248);
		sketch.ortho();
		F(
            sketch.translate(-50, 70, 250)
        );
		F(
			sketch.translate(180, -40) +
			sketch.rotate((sketch.PI * 3) / 8, [1, 0, 0]) +
			sketch.rotate(sketch.PI / 4)
		);
	};
}

// a=4,t=0,draw=(R=rotate,T=translate,F=_=>{push();for(i=0;i<6*a;i++)R(PI/2*[2,4,5].includes(i/a)),box(18,18,32),i+t/5&a||box(2,2,60),T(-18,0,-1.75);pop()})=>{clear(t++||createCanvas(540,540,WEBGL)+ortho());F(T(-43,53,250));F(T(160,0)+R(PI*3/8,[1,0,0])+R(PI/4))}

// 1344420426613628928
