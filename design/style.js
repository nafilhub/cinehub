document.addEventListener("DOMContentLoaded", function () {
  

  document.querySelectorAll('.movie-carousel').forEach(carousel => {

    const row = carousel.querySelector('.movie-row');
    const btnLeft = carousel.querySelector('.scroll-btn.left');
    const btnRight = carousel.querySelector('.scroll-btn.right');
    
    if (row && btnLeft && btnRight) {
      
  
      const scrollAmount = 180; 
    
    
      btnLeft.addEventListener('click', () => {
        row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    
      btnRight.addEventListener('click', () => {
        row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  });
 
  const categoryFilter = document.getElementById("category-filter");
  const carouselSections = document.querySelectorAll(".carousel-section");

 
  if (categoryFilter && carouselSections) {
    
    categoryFilter.addEventListener("change", () => {
      const selectedValue = categoryFilter.value;

      carouselSections.forEach(section => {
        if (selectedValue === "semua" || section.id === selectedValue) {
          section.style.display = "block"; 
        } else {
          section.style.display = "none"; 
        }
      });
    });
  }

}); 