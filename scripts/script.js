const boutonPrecedent = document.querySelector('.btn-precedent');
const boutonSuivant = document.querySelector('.btn-suivant');
const figuresCarrousel = document.querySelectorAll('figure');
const nombresCarrousel = document.querySelectorAll('.nombre');
const bodyElement = document.querySelector('body');
const boutonPlayPause = document.querySelector('.btn-play-pause');

let positionDuCarrousel = 0;

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
		positionDuCarrousel = 4;
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

// window.setInterval(naviguerVersImageSuivante, 5000);
