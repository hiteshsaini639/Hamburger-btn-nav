const imgs = document.querySelectorAll("#carousel img");
const carousel = document.getElementById("carousel");
let idx = 0;
setInterval(() => {
  carousel.style.transform = `translateX(${-idx * 700}px)`;
  idx++;
  if (idx == imgs.length) {
    idx = 0;
  }
}, 2000);
