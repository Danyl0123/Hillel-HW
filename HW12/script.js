const wrapper = document.querySelector(`.wrapper__img-block`);
const btnPrev = document.querySelector(`.btn-prev`);
const btnNext = document.querySelector(`.btn-next`);
const imgArr = Array.from(wrapper.children);
let currentIndex = 0;
demonstrateBtn = () => {
  if (currentIndex !== 0) btnPrev.classList.add(`visible`);
  else btnPrev.classList.remove(`visible`);
  if (currentIndex !== wrapper.children.length - 1)
    btnNext.classList.add(`visible`);
  else btnNext.classList.remove(`visible`);
};
demonstrateBtn();
getVisibleSlide();

btnNext.addEventListener(`click`, function () {
  if (currentIndex < wrapper.children.length - 1) {
    currentIndex++;
    getVisibleSlide();
    demonstrateBtn();
  }
});
btnPrev.addEventListener(`click`, function () {
  if (currentIndex > 0) {
    currentIndex--;

    getVisibleSlide();
    demonstrateBtn();
  }
});
function getVisibleSlide() {
  for (let i = 0; i < imgArr.length; i++) {
    if (i === currentIndex) {
      imgArr[i].classList.add(`visible`);
    } else {
      imgArr[i].classList.remove(`visible`);
    }
  }
}
