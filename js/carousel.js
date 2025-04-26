document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides   = Array.from(carousel.querySelectorAll('.slide'));
    const prevBtn  = document.querySelector('.prev-btn');
    const nextBtn  = document.querySelector('.next-btn');
  
    // Read the actual pixel width of one slide
    const slideWidth = slides[0].getBoundingClientRect().width;  // ~622px :contentReference[oaicite:2]{index=2}
  
    let currentIndex = 0;
    const maxIndex   = slides.length - 1;  // last slide index
  
    function updateCarousel() {
      const offset = -currentIndex * slideWidth;
      carousel.style.transform = `translateX(${offset}px)`;      // precise pixel shifts :contentReference[oaicite:3]{index=3}
    }
  
    nextBtn.addEventListener('click', () => {
      currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
      updateCarousel();
    });
  
    prevBtn.addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
      updateCarousel();
    });
  
    updateCarousel();  // initialize at first slide
  });
  