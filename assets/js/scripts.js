var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};


const myCarousel = document.getElementById('vdkmsCarousel')

myCarousel.addEventListener('slid.bs.carousel', event => {
  document.querySelectorAll('.carousel-item').forEach((item, index) => {
    if (item.classList.contains('active')) {
      document.querySelector('.my-carousel-indicator').innerHTML = index + 1;
    }
  })
})

