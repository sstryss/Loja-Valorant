const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const features = document.querySelectorAll('.feature');
  const titulos = document.querySelector('.titulos'); 
  const subtitles = document.querySelector('.subtitles'); 
  const h1Titulos = document.querySelector('.titulos h1'); 
  const h1Subtitles = document.querySelector('.subtitles h1'); 

  features.forEach(feature => {
    const rect = feature.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
      feature.classList.add('show');
    } else {
      feature.classList.remove('show');
    }
  });

  const rectTitulos = titulos.getBoundingClientRect();
  if (rectTitulos.top < window.innerHeight * 0.8) {
    titulos.classList.add('show'); 
    h1Titulos.classList.add('show'); 
  } else {
    titulos.classList.remove('show'); 
    h1Titulos.classList.remove('show'); 
  }

  const rectSubtitles = subtitles.getBoundingClientRect();
  if (rectSubtitles.top < window.innerHeight * 0.8) {
    subtitles.classList.add('show'); 
    h1Subtitles.classList.add('show'); 
  } else {
    subtitles.classList.remove('show'); 
    h1Subtitles.classList.remove('show'); 
  }
});
