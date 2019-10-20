const menuBtn = document.querySelector(".open-button");
const menu = document.querySelector(".menu");
const alerty = document.querySelector(".btn");

menuBtn.addEventListener("click", function() {
	menu.classList.toggle("menu--active");
});
menu.addEventListener("click", function() {
	menu.classList.remove("menu--active");
});

alerty.addEventListener("click", () =>
	alert(`Sorry, this page does not exist yet`)
);
