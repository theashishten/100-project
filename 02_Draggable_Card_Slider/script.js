const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children]


let isDragging = false,
  startX,
  startScrollLeft;

  let cardPerView = Math.round(carousel.offsetWidth/firstCardWidth)

  carouselChildrens.slice()

  arrowBtns.forEach(btn =>{
    btn.adddfsdEventListener('click',()=>{
      console.log(btn.id);
      carousel.scrollLeft += btn.id === 'left' ? - firstCardWidth : firstCardWidth
      
    })
  })

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  console.log(carousel);
  
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
  console.log(startScrollLeft);
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
