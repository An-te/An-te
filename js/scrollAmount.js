export default function () {
	const scrollHeight = () =>
		Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight,
		) - window.innerHeight;
	return window.scrollY / scrollHeight();
}
