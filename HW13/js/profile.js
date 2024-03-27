const screenWidth = screen.width;
const screenHeight = screen.height;
console.log(`
Ширина:${screenWidth},
Висота:${screenHeight}
`);
const profileBtn = document.querySelector(`.profile-btn`);
profileBtn.addEventListener(`click`, function () {
  history.go(-1);
});
