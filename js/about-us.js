const investorCarousel = document.querySelector('.investor-container');
var carouselWidth = investorCarousel.offsetWidth;

window.addEventListener("resize",() => {
    carouselWidth = investorCarousel.offsetWidth;
})

const investorLeftChevron = document.querySelector(".investor-carousel .left-chevron");
const investorRightChevron = document.querySelector(".investor-carousel .right-chevron");


investorLeftChevron?.addEventListener('click',() => {
    investorCarousel.scrollLeft -= carouselWidth - 100;
})

investorRightChevron?.addEventListener('click',() => {
    investorCarousel.scrollLeft += carouselWidth - 100;
})

