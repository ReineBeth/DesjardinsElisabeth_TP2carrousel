const boutonPrecedent = document.querySelector('.btn-precedent');
const boutonSuivant = document.querySelector('.btn-suivant');
const figuresCarrousel = document.querySelectorAll('figure');
const nombresCarrousel = document.querySelectorAll('.nombre');
const bodyElement = document.querySelector('body');
const boutonPlayPause = document.querySelector('.btn-play-pause'); 
const imagesCarrousel = document.querySelectorAll('img'); 

let positionDuCarrousel = 0;
let creerInterval = window.setInterval(naviguerVersImageSuivante, 5000); 

function retirerClass() {
	figuresCarrousel[positionDuCarrousel].classList.remove('visible');
	nombresCarrousel[positionDuCarrousel].classList.remove('actif');
}

function ajouterClass() {
	figuresCarrousel[positionDuCarrousel].classList.add('visible');
	nombresCarrousel[positionDuCarrousel].classList.add('actif');
}

function naviguerVersImageSuivante() {
	retirerClass();

	if (positionDuCarrousel === figuresCarrousel.length - 1) {
		positionDuCarrousel = 0;
	} else {
		positionDuCarrousel++;
	}
	ajouterClass();
}

function naviguerVersImagePrecedente() {
	retirerClass();

	if (positionDuCarrousel === 0) {
		positionDuCarrousel = figuresCarrousel.length - 1;
	} else {
		positionDuCarrousel--;
	}
	ajouterClass();
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
	});
});

boutonPlayPause.addEventListener('click', function() { 
	
	if(boutonPlayPause.innerHTML === 'Jouer') { 
		boutonPlayPause.innerHTML = 'Pause'; 
		creerInterval = window.setInterval(naviguerVersImageSuivante, 5000);
	} else { 
		boutonPlayPause.innerHTML = 'Jouer'; 
		window.clearInterval(creerInterval);
	}
}); 