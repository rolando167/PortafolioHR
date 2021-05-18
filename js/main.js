
var nav = document.getElementById('menSoc');


function menus(){

	let Desplazamiento_actual = window.pageYOffset;

	if(Desplazamiento_actual >= 40){
	 nav.classList.remove('bg-light');
	 nav.className = ('bg-light1');
	 nav.style.transition = '1s';

	 }else{
	   nav.classList.remove('bg-light1');
	   nav.className = ('bg-light'); 
	   nav.style.transition = '1s';
	}

}

window.addEventListener('load', function(){
	menus();    
});


window.addEventListener('scroll', function(){
	// console.log(window.pageYOffset);
	menus();
});


/*===== ACTIVE AND REMOVE MENU =====*/
var navLink = document.querySelectorAll('.nav__link');   


function linkAction(){
	/*Active link*/
	navLink.forEach(n => n.classList.remove('active'));
	this.classList.add('active');
	
	/*Remove menu mobile*/
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ---- animations ---- */
// if (typeof sr == 'undefined') {
//     window.sr = ScrollReveal({
//         duration: 1600,
//         delay: 50
//     });
// }


window.onload = function() {
	document.body.className += " loaded";
}

// ----------------------

var mainDivPortafolio = document.querySelector('#mainDivPortafolio');

const portafolioWork =[
{'titulo': 'Higorr', 'route':'img/portafolio/work1.jpg' }
,{'titulo': 'Morten', 'route':'img/portafolio/work2.jpg' }
,{'titulo': 'Planeta', 'route':'img/portafolio/work3.jpg' }
,{'titulo': 'Api Clima', 'route':'img/portafolio/work4.jpg' }
,{'titulo': 'Api Movie', 'route':'img/portafolio/work5.jpg' }
,{'titulo': 'Api Pokemon', 'route':'img/portafolio/work6.jpg' }
];


const renderDataPortafolio = () =>{
	mainDivPortafolio.innerHTML= '';
	// ----------------
	portafolioWork.forEach((portafolio, index) => {
		const appendDivImage = document.createElement('div');
		appendDivImage.className = 'col-12 col-sm-4 mb-5'
		// -----
		const appendImage = document.createElement('img');
		appendImage.className = 'img-thumbnail';
		appendImage.id = index;
		// -----
		appendImage.src = portafolio.route;

		appendDivImage.appendChild(appendImage);
		// -----
		mainDivPortafolio.appendChild(appendDivImage);
	});

}

const renderTextFooter = () =>{
	let footerText =  document.querySelector('p.footerText');
	var d = new Date();
	var year = d.getFullYear();
	footerText.innerHTML = 'Diseñado por Rolando H. - ' + year;
}

// ----------------------

renderDataPortafolio();
renderTextFooter();
// ----------------------


// /*===== MENU SHOW =====*/ 
// const showMenu = (toggleId, navId) =>{
// 		const toggle = document.getElementById(toggleId),
// 		nav = document.getElementById(navId)

// 		if(toggle && nav){
// 				toggle.addEventListener('click', ()=>{
// 						nav.classList.toggle('show')
// 				})
// 		}
// }
// showMenu('nav-toggle','nav-menu')

// /*===== ACTIVE AND REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.nav__link');   

// function linkAction(){
// 	/*Active link*/
// 	navLink.forEach(n => n.classList.remove('active'));
// 	this.classList.add('active');

// 	/*Remove menu mobile*/
// 	const navMenu = document.getElementById('nav-menu')
// 	navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));

// ===== SCROLL REVEAL ANIMATION =====
// const sr = ScrollReveal({
// 		origin: 'top',
// 		distance: '80px',
// 		duration: 2000,
// 		reset: true
// });

// /*SCROLL HOME*/
// sr.reveal('.home__title',{}); 
// sr.reveal('.button',{delay: 200}); 
// sr.reveal('.home__img',{delay: 400}); 
// sr.reveal('.home__social-icon',{ interval: 200}); 

// /*SCROLL ABOUT*/
// sr.reveal('.about__img',{}); 
// sr.reveal('.about__subtitle',{delay: 400}); 
// sr.reveal('.about__text',{delay: 400}); 

// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 
// sr.reveal('.skills__data',{interval: 200}); 
// sr.reveal('.skills__img',{delay: 600});

// /*SCROLL WORK*/
// sr.reveal('.work__img',{interval: 200}); 

// /*SCROLL CONTACT*/
// sr.reveal('.contact__input',{interval: 200}); 
