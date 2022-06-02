const init = () => {
	let windHeight = document.documentElement.clientHeight;
	let windWidth = document.documentElement.clientWidth;

	document.documentElement.style.setProperty("--wh", `${windHeight}px`);
	document.documentElement.style.setProperty("--ww", `${windWidth}px`);
	document.documentElement.style.setProperty("--whm", `-${windHeight}px`);
	document.documentElement.style.setProperty("--wwm", `-${windWidth}px`);
	document.body.classList.add("loaded__hiding");

	window.onload = function () {
		window.setTimeout(function () {
			document.body.classList.add("loaded");
			document.body.classList.remove("loaded__hiding");
		}, 2000);
	};

	// document.body.classList.add("loaded__hiding");

	// function ready() {
	// 	window.setTimeout(function () {
	// 		document.body.classList.add("loaded");
	// 		document.body.classList.remove("loaded__hiding");
	// 	}, 2000);
	// }
	// document.addEventListener("DOMContentLoaded", ready);
};

export default {
	init,
};
