const ratio_h = (largeur, ratio) =>{
	largeur /= 100;
	largeur *= ratio;
	return (largeur);
}

const article_img = document.querySelectorAll(".section2-article div img");
const title = document.getElementById("title-qui-nous-sommes");
const article_div = document.querySelectorAll(".section2-article div");
let   largeur = window.innerWidth;
let   nou;

nou = article_div[1].getBoundingClientRect();
if (nou.top < window.innerHeight / 2){
	article_div[1].classList.add("opaci");
}
nou = article_div[2].getBoundingClientRect();
if (nou.top < window.innerHeight / 2){
	article_div[2].classList.add("opaci");
}

largeur = ratio_h(largeur, 40.09);
title.style.height = largeur + "px";
largeur = window.innerWidth;
largeur = (largeur > 700) ? largeur / 2 : largeur;
largeur = ratio_h(largeur, 70.08);
article_img[0].style.height = largeur + "px";
article_img[1].style.height = largeur + "px";

window.addEventListener("resize", () => {
	largeur = window.innerWidth;
	largeur = ratio_h(largeur, 40.09);
	title.style.height = largeur + "px";
	largeur = window.innerWidth;
	largeur = (largeur > 700) ? largeur / 2 : largeur;
	largeur = ratio_h(largeur, 70.08);
	article_img[0].style.height = largeur + "px";
	article_img[1].style.height = largeur + "px";
});

window.addEventListener("scroll", () => {
	nou = article_div[1].getBoundingClientRect();
	if (nou.top < window.innerHeight){
		if (window.innerWidth > 700)
		{
			article_div[1].classList.add("nonet");
			article_div[0].classList.add("inter");
		}
		article_div[1].classList.add("opaci");
	}

	nou = article_div[2].getBoundingClientRect();
	if (nou.top < window.innerHeight){
		if (window.innerWidth > 700)
		{
			article_div[3].classList.add("move-in");
		}
		article_div[2].classList.add("opaci");
	}
})
