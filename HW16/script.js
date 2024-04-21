const clickButton = $(`.wrapper__btn`);
const modalWindow = $(`.modal-window`);
const closeButton = $(`.modal-window__btn`);
clickButton.on(`click`, function () {
  modalWindow.css(`display`, `flex`);
  $(`body`).css(`overflow`, `hidden`);
  $(`.wrapper`).css(`filter`, `blur(1px)`);
});
closeButton.on(`click`, function () {
  modalWindow.css(`display`, `none`);
  $(`body`).css(`overflow`, `auto`);
  $(`.wrapper`).css(`filter`, `blur(0)`);
});
