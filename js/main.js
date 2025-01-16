const menuBtn = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-items');

function toggleNavigation() {
	nav.classList.toggle('nav-show');
}

function closeNavigation() {
	if (nav.classList.contains('nav-show')) {
		nav.classList.remove('nav-show');
	}
}

menuBtn.addEventListener('click', event => {
	event.stopPropagation();
	toggleNavigation();
});

navLinks.forEach(link => {
	link.addEventListener('click', closeNavigation);
});
document.addEventListener('click', event => {
	if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
		closeNavigation();
	}
});
