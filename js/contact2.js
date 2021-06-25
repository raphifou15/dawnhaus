const ratio_h = (largeur, ratio) =>{
	largeur /= 100;
	largeur *= ratio;
	return (largeur);
}

const	section2_img = document.querySelectorAll("#section2 img");
let 	largeur = window.innerWidth;

 largeur = (largeur > 700) ? largeur / 3 : largeur;
 largeur = ratio_h(largeur, 70);

 section2_img[0].style.height = largeur + "px";
 section2_img[1].style.height = largeur + "px";

 section2_img[2].style.height = largeur + "px";
 
window.addEventListener("resize", () => {
 largeur = window.innerWidth;

 largeur = (largeur > 700) ? largeur / 3 : largeur;
 largeur = ratio_h(largeur, 70);

 section2_img[0].style.height = largeur + "px";
 section2_img[1].style.height = largeur + "px";
 section2_img[2].style.height = largeur + "px";
})