const headerBerger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const boDy = document.getElementById('body');

headerBerger.addEventListener('click', () => {
	headerBerger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	
});

const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
 
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	 },
 });