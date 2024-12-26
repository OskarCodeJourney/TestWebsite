const menuBtn = document.querySelector(`.burger-menu`);
const nav = document.querySelector(`.nav`);

function showNavigation() {
	nav.classList.toggle('nav-show');
}
menuBtn.addEventListener('click', showNavigation);
