const allContent = [
  { id: 1, title: "The Dark Knight", poster: "assets/DK.jpg", category: "movie", genres: ["action", "crime", "drama"], trailer: "" },
  { id: 2, title: "Ada Apa dengan Cinta?", poster: "assets/Adaapadengancinta.JPG", category: "movie", genres: ["romance", "drama", "coming-of-age"], trailer: "" },
  { id: 3, title: "Pengabdi Setan", poster: "assets/Joker.jpg", category: "movie", genres: ["horror", "supernatural"], trailer: "" },
  { id: 4, title: "The Grand Budapest Hotel", poster: "assets/Joker.jpg", category: "movie", genres: ["comedy", "drama"], trailer: "" },
  { id: 5, title: "The Shawshank Redemption", poster: "assets/Joker.jpg", category: "movie", genres: ["drama"], trailer: "" },
  { id: 6, title: "Interstellar", poster: "assets/Joker.jpg", category: "movie", genres: ["sci-fi", "adventure", "drama"], trailer: "" },
  { id: 7, title: "Dilan 1990", poster: "assets/Joker.jpg", category: "movie", genres: ["romance", "drama"], trailer: "" },
  { id: 8, title: "Parasite", poster: "assets/Joker.jpg", category: "movie", genres: ["drama", "thriller", "dark comedy"], trailer: "" },
  { id: 9, title: "Laskar Pelangi", poster: "assets/Joker.jpg", category: "movie", genres: ["drama", "family"], trailer: "" },
  { id: 10, title: "The Martian", poster: "assets/Joker.jpg", category: "movie", genres: ["sci-fi", "adventure", "drama"], trailer: "" },
  { id: 11, title: "Inception", poster: "assets/Joker.jpg", category: "movie", genres: ["sci-fi", "action", "mystery"], trailer: "" },
  { id: 12, title: "Habibie & Ainun", poster: "assets/Joker.jpg", category: "movie", genres: ["romance", "biography", "drama"], trailer: "" },
  { id: 13, title: "Avengers: Endgame", poster: "assets/Joker.jpg", category: "movie", genres: ["action", "adventure", "sci-fi"], trailer: "" },
  { id: 14, title: "KKN di Desa Penari", poster: "assets/Joker.jpg", category: "movie", genres: ["horror", "mystery", "thriller"], trailer: "" },
  { id: 15, title: "Forrest Gump", poster: "assets/Joker.jpg", category: "movie", genres: ["drama", "romance", "comedy"], trailer: "" },
  { id: 16, title: "Titanic", poster: "assets/Joker.jpg", category: "movie", genres: ["romance", "drama", "disaster"], trailer: "" },
  { id: 17, title: "Marlina Si Pembunuh dalam Empat Babak", poster: "assets/Joker.jpg", category: "movie", genres: ["drama", "thriller", "western"], trailer: "" },
  { id: 18, title: "Joker", poster: "assets/Joker.jpg", category: "movie", genres: ["drama", "crime", "psychological thriller"], trailer: "" },
  { id: 19, title: "Miracle in Cell No.7", poster: "assets/Joker.jpg", category: "movie", genres: ["drama", "family"], trailer: "" },
  { id: 20, title: "The Pursuit of Happyness", poster: "assets/Joker.jpg", category: "movie", genres: ["biography", "drama", "family"], trailer: "" },
  { id: 21, title: "Oppenheimer", poster: "assets/Joker.jpg", category: "movie", genres: ["biography", "drama", "history"], trailer: "" },
  { id: 22, title: "Ngeri-Ngeri Sedap", poster: "assets/Joker.jpg", category: "movie", genres: ["drama", "comedy", "family"], trailer: "" },
  { id: 23, title: "La La Land", poster: "assets/Joker.jpg", category: "movie", genres: ["romance", "musical", "drama"], trailer: "" },
  { id: 24, title: "Gundala", poster: "assets/Joker.jpg", category: "movie", genres: ["action", "superhero", "drama"], trailer: "" },
  { id: 25, title: "The Revenant", poster: "assets/Joker.jpg", category: "movie", genres: ["adventure", "drama", "survival"], trailer: "" },
  { id: 26, title: "Alice in Borderland", poster: "assets/Joker.jpg", category: "series", genres: ["action", "adventure", "fantasy", "mystery", "science fiction"], trailer: "https://www.youtube.com/embed/EEJ7nUvXUYA?si=TaiOjdP74mQccojh" },
  { id: 27, title: "First Love", poster: "assets/Joker.jpg", category: "series", genres: ["drama", "romance"], trailer: "https://www.youtube.com/embed/RYmQHMC8NII?si=kGAJFc0XDST1e9xn" },
  { id: 28, title: "Squid Game", poster: "assets/Joker.jpg", category: "series", genres: ["action", "adventure", "crime", "drama", "mystery"], trailer: "https://www.youtube.com/embed/oqxAJKy0ii4?si=LpkCbBLmRmRh017M" },
  { id: 29, title: "Train to Busan", poster: "assets/Joker.jpg", category: "movie", genres: ["action", "horror", "thriller"], trailer: "https://www.youtube.com/embed/ZTs37z_FYZw?si=ZKOfVGMkUhMm0V1-" },
  { id: 30, title: "Vincenzo", poster: "assets/Joker.jpg", category: "series", genres: ["action", "adventure", "comedy"], trailer: "https://www.youtube.com/embed/S12-4mXCNj4?si=0xnJjywJqrJD1P8d" }
];

const penawaranContent = [
  { title: "Langganan 1 Tahun", poster: "assets/banner-penawaran-1.jpg" },
  { title: "Bundling Hemat", poster: "assets/banner-penawaran-2.jpg" }
];

document.addEventListener("DOMContentLoaded", function () {
  const terbaruRow = document.querySelector("#film-terbaru .movie-row");
  const dibeliRow = document.querySelector("#paling-dibeli .movie-row");
  const penawaranRow = document.querySelector("#series-populer .movie-row");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const openModalButtons = document.querySelectorAll(".js-open-genre-modal");
  const closeModalButton = document.querySelector(".js-close-modal");
  const genreButtons = document.querySelectorAll(".genre-btn");
  const modal = document.getElementById("genre-modal");
  const overlay = document.querySelector(".modal-overlay");

  function renderPosters(contentList, targetRow) {
    targetRow.innerHTML = "";
    if (contentList.length === 0) {
      targetRow.innerHTML = `<p class="text-secondary p-3">Tidak ada konten yang cocok.</p>`;
      return;
    }
    for (const content of contentList) {
      const newPoster = document.createElement("img");
      newPoster.src = content.poster;
      newPoster.alt = content.title;
      newPoster.className = "movie-poster";
      targetRow.appendChild(newPoster);
    }
  }

  function filterContent(filterValue) {
    const filteredData = allContent.filter(c => c.category === filterValue);
    renderPosters(filteredData, terbaruRow);
    renderPosters(filteredData, dibeliRow);
    filterButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === filterValue);
    });
  }

  document.querySelectorAll('.movie-carousel').forEach(carousel => {
    const row = carousel.querySelector('.movie-row');
    const btnLeft = carousel.querySelector('.scroll-btn.left');
    const btnRight = carousel.querySelector('.scroll-btn.right');
    if (row && btnLeft && btnRight) {
      let scrollAmount = carousel.id === 'banner-carousel' ? row.clientWidth : row.querySelector('.movie-poster')?.offsetWidth + (parseFloat(getComputedStyle(row).gap) || 0) || 300;
      btnLeft.addEventListener('click', () => row.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
      btnRight.addEventListener('click', () => row.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener("click", () => filterContent(button.getAttribute("data-filter")));
  });

  const showModal = () => {
    modal?.classList.add("active");
    overlay?.classList.add("active");
  };
  const hideModal = () => {
    modal?.classList.remove("active");
    overlay?.classList.remove("active");
  };
  openModalButtons.forEach(btn => btn.addEventListener("click", showModal));
  closeModalButton?.addEventListener("click", hideModal);
  overlay?.addEventListener("click", hideModal);

  genreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedGenre = button.textContent.toLowerCase();
      const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");
      const filteredContent = allContent.filter(c => c.category === activeFilter && c.genres.includes(selectedGenre));
      renderPosters(filteredContent, terbaruRow);
      renderPosters(filteredContent, dibeliRow);
      hideModal();
    });
  });

  renderPosters(penawaranContent, penawaranRow);
  const defaultFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");
  filterContent(defaultFilter);
});
