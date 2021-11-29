// nav
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUl.classList.toggle('show');
});

navUl.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navUl.classList.remove('show');
})

// sliders
const logos = Array.from(document.querySelectorAll('.logos-container img'));

let swiper = new Swiper(".slider", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  autoplay: {
      delay: 5000,
  },
});

logos.forEach((logo, index) => {
  logo.addEventListener('click', () => {
    swiper.slideTo(index);
  })
})

swiper.on('slideChange', () => {
  setActive(swiper.activeIndex);
})

function setActive(currentIndex) {
  logos.forEach((logo, index) => {
    logo.classList.remove("active");
    if (index == currentIndex) {
      logo.classList.add("active");
    }
  })
}

let productSwiper = new Swiper(".product-swiper", {

})

let whySwiper = new Swiper(".cards", {
  effect: "cards"
})