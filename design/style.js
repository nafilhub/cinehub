document.addEventListener("DOMContentLoaded", function () {
  
  // --- LOGIKA SCROLL CAROUSEL (DARI LANGKAH SEBELUMNYA) ---
  document.querySelectorAll('.movie-carousel').forEach(carousel => {

    const row = carousel.querySelector('.movie-row');
    const btnLeft = carousel.querySelector('.scroll-btn.left');
    const btnRight = carousel.querySelector('.scroll-btn.right');
    
    if (row && btnLeft && btnRight) {
      
      let scrollAmount; 

      if (carousel.id === 'banner-carousel') {
        scrollAmount = row.clientWidth;
      } else {
        const poster = row.querySelector('.movie-poster');
        
        if (poster) {
          const rowStyle = getComputedStyle(row);
          const gap = parseFloat(rowStyle.gap) || 0; 
          scrollAmount = poster.offsetWidth + gap;
        } else {
          scrollAmount = row.clientWidth; 
        }
      }
    
      btnLeft.addEventListener('click', () => {
        row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    
      btnRight.addEventListener('click', () => {
        row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  });
 
  // --- LOGIKA FILTER ANDA (DIBIARKAN) ---
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

  // === LOGIKA BARU UNTUK MODAL GENRE ===
  const openModalButtons = document.querySelectorAll(".js-open-genre-modal");
  const closeModalButton = document.querySelector(".js-close-modal");
  const modal = document.getElementById("genre-modal");
  const overlay = document.querySelector(".modal-overlay");

  // Fungsi untuk menampilkan modal
  const showModal = () => {
    if (modal) modal.classList.add("active");
    if (overlay) overlay.classList.add("active");
  };

  // Fungsi untuk menyembunyikan modal
  const hideModal = () => {
    if (modal) modal.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
  };

  // Tambah listener ke semua tombol "Genre"
  if (openModalButtons.length > 0) {
    openModalButtons.forEach(btn => {
      btn.addEventListener("click", showModal);
    });
  }
  
  // Tambah listener ke tombol close (X)
  if (closeModalButton) {
    closeModalButton.addEventListener("click", hideModal);
  }

  // Tambah listener ke overlay (klik di luar modal)
  if (overlay) {
    overlay.addEventListener("click", hideModal);
  }

});
