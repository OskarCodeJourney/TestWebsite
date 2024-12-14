// const cardBtn = document.querySelector(`.card__box-btn`);
// const cardShadow = document.querySelector(`.card__box-shadow`);
// const arrow = document.querySelector(`.arrow-down`);
// function addText() {
// 	cardShadow.classList.toggle('add');
// 	if (cardShadow.classList.contains('add')) {
// 		arrow.style.rotate = '180deg';
// 	} else {
// 		arrow.style.rotate = '0deg';
// 	}
// }
// cardBtn.addEventListener('click', addText);

const menuBtn = document.querySelector(`.burger-menu`);
const nav = document.querySelector(`.nav`);

function showNavigation() {
	nav.classList.toggle('nav-show');
}
menuBtn.addEventListener('click', showNavigation);
