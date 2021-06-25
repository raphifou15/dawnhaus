
// partie tab//
const	svg1 = document.getElementById('hamburger');
const	svg2 = document.getElementById('cross');
const  	log = document.querySelector('header nav #menu-tab div');
const  	body = document.getElementsByTagName('body');
const  	main = document.getElementsByTagName('main');

svg1.addEventListener('click', () => {
	log.style.display="block";
	svg1.style.display = "none";
	svg2.style.display = "block";
	if (log.classList.contains("animation_3"))
		log.classList.remove("animation_3");
	log.classList.add("animation_2");
	body[0].style.overflow ="hidden";
	main[0].classList.add("opa");
})

svg2.addEventListener('click', () => {
	svg1.style.display = "block";
	svg2.style.display = "none";
	log.classList.remove("animation_2");
	log.classList.add("animation_3");
	window.setTimeout( () => {
		log.style.display="none";
	}, 100);
	body[0].style.overflow ="visible";
	main[0].classList.remove("opa");	
})

//partie phone//

const	svg1_1 = document.getElementById('hamburger-1');
const	nav = document.getElementsByTagName("nav");

svg1_1.addEventListener("click", () => {
	if (nav[0].classList.contains("cover_1") === false)
	{
		nav[0].classList.add("add_flex");
		if (nav[0].classList.contains("cover_1-reverse"))
			nav[0].classList.remove("cover_1-reverse");
		nav[0].classList.add("cover_1");
		body[0].style.overflow = "hidden";
	}
	else
	{
		nav[0].classList.remove("cover_1");
		nav[0].classList.add("cover_1-reverse");
		window.setTimeout( () => {
			nav[0].classList.remove("add_flex");
		}, 1000);
		body[0].style.overflow = "visible";
	}
});

window.addEventListener("resize", () => {

	if (nav[0].classList.contains("cover_1") && window.innerWidth > 600)
	{
		nav[0].classList.remove("cover_1");
		nav[0].classList.add("cover_1-reverse");
		window.setTimeout( () => {
			nav[0].classList.remove("add_flex");
		}, 1000);
		body[0].style.overflow = "visible";
	}

	if ((svg2.style.display == "block") && ((window.innerWidth < 601) || (window.innerWidth > 1024)))
	{
		svg1.style.display = "block";
		svg2.style.display = "none";
		log.classList.remove("animation_2");
		log.classList.add("animation_3");
		window.setTimeout( () => {
			log.style.display="none";
		}, 100);
		body[0].style.overflow ="visible";
		main[0].classList.remove("opa");	
	}
})