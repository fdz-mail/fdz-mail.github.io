var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true, // Enable continuous loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

swiper.on("click", function () {
  var activeSlide = swiper.slides[swiper.activeIndex];
  var activeImage = activeSlide.querySelector("img");

  openLightbox(activeImage.src);
});

function openLightbox(imageSrc) {
  var lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  var lightboxImage = document.createElement("img");
  lightboxImage.src = imageSrc;

  lightbox.appendChild(lightboxImage);

  lightbox.addEventListener("click", closeLightbox);

  document.body.appendChild(lightbox);
}

function closeLightbox(event) {
  if (event.target.classList.contains("lightbox")) {
    event.target.remove();
  }
}
