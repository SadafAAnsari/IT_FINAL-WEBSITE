let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

   
    slides[currentSlide].setAttribute('aria-hidden', 'true');

    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

 
    slides[currentSlide].setAttribute('aria-hidden', 'false');

    
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}


document.addEventListener('DOMContentLoaded', () => {
    moveSlide(0);
});
