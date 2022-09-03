const sideMenu = document.querySelector(".aside");
const menuBtn = document.querySelector(".ri-menu-line");
const closeBtn = document.querySelector(".ri-close-line");
const themeToggler = document.querySelector(".theme-toggler");
const loader = document.querySelector(".container-loader");

menuBtn.addEventListener('click', () => {
	sideMenu.classList.toggle("side-active");
});

closeBtn.addEventListener('click', () => {
	sideMenu.classList.remove("side-active");
});

themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme-variables');

	themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
	themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
});

/* LOADER */
function loaderActive() {
	loader.classList.add('loader-active');	
}

function loaderActiveTime() {
	setInterval(loaderActive, 2000);
}

window.onload = loaderActiveTime();
/* LOADER */