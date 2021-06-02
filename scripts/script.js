const boutonPrecedent = document.querySelector('.btn-precedent');
const boutonSuivant = document.querySelector('.btn-suivant');
const figuresCarrousel = document.querySelectorAll('figure');
const nombresCarrousel = document.querySelectorAll('.btn-nombre');
const bodyElement = document.querySelector('body');
const boutonPlayPause = document.querySelector('.btn-play-pause'); 
const imagesCarrousel = document.querySelectorAll('img'); 
const CLASS_IMAGE_ACTIVE = 'visible';
const CLASS_NOMBRE_ACTIF =  'actif' ;

let positionDuCarrousel = 0;
let carrouselEnLecure = true; 
let creerInterval = window.setInterval(naviguerVersImageSuivante, 3000);

function retirerClass() {
	figuresCarrousel[positionDuCarrousel].classList.remove(CLASS_IMAGE_ACTIVE);
	nombresCarrousel[positionDuCarrousel].classList.remove(CLASS_NOMBRE_ACTIF);
}

function ajouterClass() {
	figuresCarrousel[positionDuCarrousel].classList.add(CLASS_IMAGE_ACTIVE);
	nombresCarrousel[positionDuCarrousel].classList.add(CLASS_NOMBRE_ACTIF);
}

function naviguerVersImageSuivante() {
	retirerClass();
	mettreAZeroIntervalle(); 
	if (positionDuCarrousel === figuresCarrousel.length - 1) {
		positionDuCarrousel = 0;
	} else {
		positionDuCarrousel++;
	}
	ajouterClass();
}

function naviguerVersImagePrecedente() {
	retirerClass();
	mettreAZeroIntervalle(); 
	if (positionDuCarrousel === 0) {
		positionDuCarrousel = figuresCarrousel.length - 1;
	} else {
		positionDuCarrousel--;
	}
	ajouterClass();
}

function intervallePausePlay() { 
	if(carrouselEnLecure) { 
		boutonPlayPause.innerHTML = 'Jouer'; 
		carrouselEnLecure = false;  
	} else { 
		boutonPlayPause.innerHTML = 'Pause';
		carrouselEnLecure = true; 
	}
	mettreAZeroIntervalle(); 
}

function mettreAZeroIntervalle() { 
	window.clearInterval(creerInterval); 
	if(carrouselEnLecure) {
		creerInterval = window.setInterval(naviguerVersImageSuivante, 3000);
	} 
}

boutonSuivant.addEventListener('click', naviguerVersImageSuivante);

boutonPrecedent.addEventListener('click', naviguerVersImagePrecedente);

document.addEventListener('keyup', (event) => {
	if (event.key === 'ArrowLeft') {
		naviguerVersImagePrecedente();
	} else if (event.key === 'ArrowRight') {
		naviguerVersImageSuivante();
	}
});

nombresCarrousel.forEach((element) => {
	element.addEventListener('click', function () {
		retirerClass();
		positionDuCarrousel = element.innerHTML - 1;
		ajouterClass();
		mettreAZeroIntervalle(); 
	});
});

boutonPlayPause.addEventListener('click', intervallePausePlay); 
