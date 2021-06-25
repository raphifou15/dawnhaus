let height_footer;


window.addEventListener('load', () => {
	main[0].style.marginBottom = "0";
	height_footer = body[0].getBoundingClientRect();
	if (height_footer.height < window.innerHeight)
		main[0].style.marginBottom = (window.innerHeight - height_footer.height) + "px";
	else
		main[0].style.marginBottom = "0";
});

window.addEventListener("resize", () => {
	main[0].style.marginBottom = "0";
	height_footer = body[0].getBoundingClientRect();
	if (height_footer.height < window.innerHeight)
		main[0].style.marginBottom = (window.innerHeight - height_footer.height) + "px";
	else
		main[0].style.marginBottom = "0";
})