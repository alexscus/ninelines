import "core-js/stable";
import "regenerator-runtime/runtime";
import svg4everybody from "svg4everybody";
import $ from "jquery";
import objectFitImages from "object-fit-images";
// import objectFitVideos from 'object-fit-videos';
import LocomotiveScroll from "locomotive-scroll";

svg4everybody();
objectFitImages();
// objectFitVideos();

window.$ = $;
window.jQuery = $;
window.objectFitImages = objectFitImages;

const scroll = new LocomotiveScroll({
	el: document.querySelector(".site"),
	smooth: true,
});

scroll.on("scroll", (args) => {
	console.log(args.currentElements);
});

require("ninelines-ua-parser");
