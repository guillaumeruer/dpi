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



// slider
// const slider = document.querySelector('.slider-container');
// const slides = Array.from(document.querySelectorAll('.slide'));
// const dots = Array.from(document.querySelectorAll('.dot'));

// let isDragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
// let animationID = 0;
// let currentIndex = 0;

// Disable context menu
// window.oncontextmenu = function(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   return false;
// }

// slides.forEach((slide, index) => {
//   const slideImage = slide.querySelector('img');
//   slideImage.addEventListener('dragstart', (e) => e.preventDefault());

//   // Touch events
//   slide.addEventListener('touchstart', touchStart(index));
//   slide.addEventListener('touchend', touchEnd);
//   slide.addEventListener('touchmove', touchMove);
  
//   // Mouse events
//   slide.addEventListener('mousedown', touchStart(index));
//   slide.addEventListener('mouseup', touchEnd);
//   slide.addEventListener('mouseleave', touchEnd);
//   slide.addEventListener('mousemove', touchMove);
// })

// function touchStart(index) {
//   return function(event) {
//     currentIndex = index;
//     startPos = getPositionX(event);
//     isDragging = true;

//     animationID = requestAnimationFrame(animation);
//     slider.classList.add('grabbing');
//   }
// }

// function touchEnd() {
//   isDragging = false;
//   cancelAnimationFrame(animationID);

//   const movedBy = currentTranslate - prevTranslate;
//   if (movedBy < -100 && currentIndex < slides.length - 1) {
//     currentIndex += 1;
//   }
//   if (movedBy > 100 && currentIndex > 0) {
//     currentIndex -= 1;
//   }

//   setPositionByIndex();

//   slider.classList.remove('grabbing');
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event);
//     currentTranslate = prevTranslate + currentPosition - startPos;
//   }
// }

// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
// }

// function animation() {
//   setSliderPosition();
//   if (isDragging) requestAnimationFrame(animation);
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`;
// }

// function setPositionByIndex() {
//   currentTranslate = currentIndex * -window.innerWidth;
//   prevTranslate = currentTranslate;
//   setSliderPosition();
//   setDotActive();
// }

// function setDotActive() {
//   dots.forEach((dot, index) => {
//     dot.classList.remove('active');
//     if (currentIndex === index) {
//       dot.classList.add('active');
//     }
//   })
// }