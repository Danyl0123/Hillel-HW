const btnPrev = document.querySelector(`.btn-prev`);
const btnNext = document.querySelector(`.btn-next`);
const wrapper = document.querySelector(`.wrapper__img-block`);
const imgArr = Array.from(wrapper.children);
let currentIndex = 0;
demonstrateBtn = () => {
  if (currentIndex !== 0) btnPrev.classList.add(`visible`);
  else btnPrev.classList.remove(`visible`);
  if (currentIndex !== imgArr.length - 1) {
    btnNext.classList.add(`visible`);
  } else btnNext.classList.remove(`visible`);
};
demonstrateBtn();
showSlide = () => {
  for (let i = 0; i < wrapper.children.length; i++) {
    if (i === currentIndex) {
      imgArr[i].classList.add(`visible`);
    } else {
      imgArr[i].classList.remove(`visible`);
    }
  }
};
showSlide();
btnNext.addEventListener(`click`, function () {
  currentIndex++;
  showSlide();
  demonstrateBtn();
});
btnPrev.addEventListener(`click`, function () {
  currentIndex--;
  showSlide();
  demonstrateBtn();
});
