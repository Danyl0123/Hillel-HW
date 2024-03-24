const elem = document.querySelector(`.wrapper__input`);
const wrapper = document.querySelector(`.wrapper`);
elem.addEventListener(`focus`, function () {
  const div = document.createElement(`div`);
  wrapper.append(div);
  div.style.height = `200px`;
  div.style.width = `200px`;
  div.style.backgroundColor = `red`;

  elem.addEventListener(`blur`, function () {
    div.remove();
  });
});
