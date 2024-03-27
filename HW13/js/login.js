const inputLogin = document.querySelector(`.wrapper__input-login`);
const inputPassword = document.querySelector(`.wrapper__input-password`);
const button = document.querySelector(`.wrapper__btn`);
function setBtnDisabled() {
  if (inputLogin.value.length === 0 || inputPassword.value.length === 0)
    button.setAttribute(`disabled`, `disabled`);
  else button.removeAttribute(`disabled`);
}
setBtnDisabled();
inputLogin.addEventListener(`input`, setBtnDisabled);
inputPassword.addEventListener(`input`, setBtnDisabled);

const wrapperForm = document.querySelector(`.wrapper__form`);
const loader = document.querySelector(`.loader`);
button.addEventListener(`click`, function () {
  wrapperForm.style.display = `none`;
  loader.style.display = `block`;
  console.log(`
  login: ${inputLogin.value},
  password: ${inputPassword.value}`);
  setTimeout(function () {
    location.href = `profile.html`;
  }, 2000);
});
