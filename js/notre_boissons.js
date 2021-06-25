const ratio_h = (largeur, ratio) =>{
	largeur /= 100;
	largeur *= ratio;
	return (largeur);
}


const title = document.getElementById("title-notre-boissons");
const section1 = document.getElementById("section1");
const section2_h2 = document.querySelector("#section2 h2");
const section3_h2 = document.querySelector("#section3 h2");
const section2_article = document.getElementsByClassName("section2-article");
const section3_article = document.getElementsByClassName("section3-article");
let   largeur = window.innerWidth;
let   nou_2;
let   nou_3;
let   nou_4;
let   x = -1;
let   tab = [];

nou = section1.getBoundingClientRect();
nou_2 = section2_h2.getBoundingClientRect();
nou_3 = section2_article[0].getBoundingClientRect();
nou_4 = section2_article[1].getBoundingClientRect();
nou_5 = section3_h2.getBoundingClientRect();
while (++x < 5){
	tab[x] = section3_article[x].getBoundingClientRect();
	if (tab[x].top < window.innerHeight / 2)
		section3_article[x].classList.add("opa");
}


if (nou.top < window.innerHeight / 2)
	section1.classList.add("opa");
if (nou_2.top < window.innerHeight / 2)
	section2_h2.classList.add("opa");
if (nou_3.top < window.innerHeight / 2)
	section2_article[0].classList.add("derouler");
if (nou_4.top < window.innerHeight / 2)
	section2_article[1].classList.add("derouler");
if (nou_5.top < window.innerHeight / 2)
	section3_h2.classList.add("opa");

console.log(section2_article[0]);

largeur = ratio_h(largeur, 40);
title.style.height = largeur + "px";

window.addEventListener("resize", () => {
	largeur = window.innerWidth;
	largeur = ratio_h(largeur, 40);
	title.style.height = largeur + "px";
})

window.addEventListener("scroll", () => {
	nou = section1.getBoundingClientRect();
	nou_2 = section2_h2.getBoundingClientRect();
	nou_3 = section2_article[0].getBoundingClientRect();
	nou_4 = section2_article[1].getBoundingClientRect();
	nou_5 = section2_h2.getBoundingClientRect();
	if (nou.top < window.innerHeight)
		section1.classList.add("opa");
	if (nou_2.top < window.innerHeight)
	section2_h2.classList.add("opa");
	if (nou_3.top < window.innerHeight)
		section2_article[0].classList.add("derouler");
	if (nou_4.top < window.innerHeight)
		section2_article[1].classList.add("derouler");
	if (nou_5.top < window.innerHeight)
		section3_h2.classList.add("opa");

	x = -1;
	while (++x < 5){
		tab[x] = section3_article[x].getBoundingClientRect();
		if (tab[x].top < window.innerHeight)
			section3_article[x].classList.add("opa");
	}	
})