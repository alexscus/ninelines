import header from "../components/header";
import helpers from "../helpers";

let firstNav = document.querySelector(".header__list li");
firstNav.classList.add("header__list--active");
let heightHeader = $("header").height();
let positions = [],
	currentActive = null,
	links = $(".header__link");

positions = positions.reverse();

$(window).on("scroll", function () {
	let winTop = $(window).scrollTop();
	for (let i = 0; i < positions.length; i++) {
		if (positions[i].top < winTop) {
			if (currentActive !== i) {
				currentActive = i;
				links
					.parent()
					.filter(".header__list--active")
					.removeClass("header__list--active");
				positions[i].a.parent().addClass("header__list--active");
			}
			break;
		}
	}
});

function activeNav(e) {
	function focusSisters() {
		$(".header__list li").removeClass("header__list--active");
		$(e.target).parent().toggleClass("header__list--active");
	}
	if ($(e.target).parent().is(".header__list--active")) {
		focusSisters();
	} else {
		focusSisters();
	}
}

/**
 * Модуль "Плавный переход к якорю"
 */
const init = () => {
	helpers.$document.on("click.anchor", ".js-to-anchor", (e) => {
		e.preventDefault();
		e.stopPropagation();
		activeNav(e);

		const id = $(e.currentTarget).attr("href");
		const speed = $(e.currentTarget).data("speed") || 500;

		header.closeMenu().then(() => {
			$(".js-burger").removeClass("is-active");
		});
	});
};

const destroy = () => {
	helpers.$document.off(".anchor");
};

export default {
	init,
	destroy,
};
