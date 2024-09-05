export default function () {
	const keyframe = [
		`@keyframes anim {
            from { filter: blur(10px) invert(100%); }
            to   { filter: blur(0px); }  
        }`,
		`@keyframes anim {
            from { filter: blur(10px); }
            to   { filter: blur(0px) invert(100%); }  
        }`,
		`@keyframes anim {
            from { filter: blur(10px); }  
        }`,
        // `@keyframes anim {
        //     to   { filter: blur(5px); }  
        // }`,
	];
	const animation = [
        "anim 3s forwards",
    ];
	return {
        keyframe: keyframe,
		animation: animation,
	};
}
