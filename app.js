
let typed = new Typed(".auto-input", {
    strings: ["Frontend Development", "Backend Development", "Web Designing","Web Development"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })


// Toggle the navbar on click
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


let fBtn = document.querySelector(".f-btn");
let bBtn = document.querySelector(".b-btn")
let oBtn = document.querySelector(".o-btn")
let skills1 = document.querySelector(".frontend");
let skills2 = document.querySelector(".backend")
let skills3 = document.querySelector(".other")

fBtn.addEventListener("click", function(){
  skills1.style.display="grid";
  skills2.style.display="none";
  skills3.style.display="none";
})
bBtn.addEventListener("click", function(){
  skills1.style.display="none";
  skills2.style.display="grid";
  skills3.style.display="none";
})
oBtn.addEventListener("click", function(){
  skills1.style.display="none";
  skills2.style.display="none";
  skills3.style.display="grid";
})



let currentIndex = 0;

function moveSlide(step) {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  const slider = document.querySelector('.slider');
  
  currentIndex += step;

  // Loop the cards (if at the last card, move to first, and vice versa)
  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  } else if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  // Move the slider by adjusting the transform property
  const cardWidth = cards[0].offsetWidth + 20; // Width + margin
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
