const buyBtn = document.querySelector(`.product-card__btn`);
const containerBlock = document.querySelector(`.container`);
const priceOfProduct =
  document.querySelector(`.product-card__price`).textContent;
const form = document.querySelector(`.form`);
buyBtn.addEventListener(`click`, function () {
  form.style.display = `flex`;
});
let appended = false;
const submitBtn = document.querySelector(`.form__submit`);
submitBtn.addEventListener(`click`, (event) => {
  event.preventDefault();

  const formTable = new FormData(form);
  formObject = {};
  formTable.forEach(function (value, key) {
    formObject[key] = value;
  });
  validateForm(formObject);
  const isFormValid = validateForm(formObject);
  if (!isFormValid) {
    return null;
  } else {
    if (!appended) {
      const appendedText = `Ваше замовлення буде доставлено у місто ${
        formObject.city
      } у відділеня нової пошти #${
        formObject[`nova_post`]
      }.Замовлена кількість товару - ${
        formObject[`quantity_of_product`]
      }.Ціна товару складатиме - ${
        formObject[`quantity_of_product`] * priceOfProduct
      } грн.Коментар до замовлення: 
    ${formObject[`client_comment`]}`;
      containerBlock.append(appendedText);
      appended = true;
    }
  }
});

function validateForm(object) {
  const nameValue = object[`client_name`];
  const namePattern = /^[А-ЯІЄ][а-яіїє]+\s[А-ЯІЄ][а-яієї]+\s[А-ЯІЄ][а-яієї]/;
  const isValidName = namePattern.test(nameValue);
  if (!isValidName) {
    document.querySelector(`#client_name-block`).style.display = "block";
    document
      .querySelector(`#client_name`)
      .addEventListener(`input`, function () {
        document.querySelector(`#client_name-block`).style.display = "none";
        document
          .querySelector(`#client_name`)
          .removeEventListener(`input`, arguments.callee);
      });
    return false;
  } else {
    document.querySelector(`#client_name-block`).style.display = "none";
  }

  const numberValue = object[`client_phone`];
  if (numberValue.length > 12) {
    document.querySelector(`#client_number-block`).style.display = `block`;

    document
      .querySelector(`#client_phone`)
      .addEventListener(`input`, function () {
        document.querySelector(`#client_number-block`).style.display = "none";
        document
          .querySelector(`#client_phone`)
          .removeEventListener(`input`, arguments.callee);
      });
  } else if (numberValue.length === 11) {
    document.querySelector(`#client_number-block`).style.display = `block`;

    document
      .querySelector(`#client_phone`)
      .addEventListener(`input`, function () {
        document.querySelector(`#client_number-block`).style.display = "none";
        document
          .querySelector(`#client_phone`)
          .removeEventListener(`input`, arguments.callee);
      });
  }
  const numberPattern = /\+?\d{2}\(\d{3}\)\d{7}|\d{10,12}/;
  const isValidPhone = numberPattern.test(numberValue);
  if (!isValidPhone) {
    document.querySelector(`#client_number-block`).style.display = `block`;
    document
      .querySelector(`#client_phone`)
      .addEventListener(`input`, function () {
        document.querySelector(`#client_number-block`).style.display = "none";
        document
          .querySelector(`#client_phone`)
          .removeEventListener(`input`, arguments.callee);
      });
  } else {
    document.querySelector(`#client_number-block`).style.display = `none`;
  }

  const emailValue = object[`client_mail`];

  const emailPattern = /[a-zA-Z0-9]+@[A-Za-z]+\.[a-zA-Z]+/;
  const isValidEmail = emailPattern.test(emailValue);
  if (!isValidEmail) {
    document.querySelector(`#client_mail-block`).style.display = `block`;
    document
      .querySelector(`#client_mail`)
      .addEventListener(`input`, function () {
        document.querySelector(`#client_mail-block`).style.display = "none";
        document
          .querySelector(`#client_mail`)
          .removeEventListener(`input`, arguments.callee);
      });
  } else {
    document.querySelector(`#client_mail-block`).style.display = `none`;
  }

  const npNumber = object[`nova_post`];
  if (!npNumber || npNumber <= 0 || npNumber > 450) {
    document.querySelector(`#nova_post-block`).style.display = "block";
    document.querySelector(`#nova_post`).addEventListener(`input`, function () {
      document.querySelector(`#nova_post-block`).style.display = "none";
      document
        .querySelector(`#nova_post`)
        .removeEventListener(`input`, arguments.callee);
    });
    return false;
  } else {
    document.querySelector(`#nova_post-block`).style.display = "none";
  }

  const paymentMethod = object[`payment_method`];
  if (!paymentMethod) {
    document.querySelector(`#payment_method-block`).style.display = "block";
    document
      .querySelector(`.form__radio`)
      .addEventListener(`click`, function () {
        document.querySelector(`#payment_method-block`).style.display = "none";
        document
          .querySelector(`.form__radio`)
          .removeEventListener(`form__radio`, arguments.callee);
      });
    return false;
  } else {
    document.querySelector(`#payment_method-block`).style.display = "none";
  }

  const quantityOfProduct = object[`quantity_of_product`];
  if (!quantityOfProduct || quantityOfProduct <= 0) {
    document.querySelector(`#quantity_of_product-block`).style.display =
      "block";
    document
      .querySelector(`#quantity_of_product`)
      .addEventListener(`input`, function () {
        document.querySelector(`#quantity_of_product-block`).style.display =
          "none";
        document
          .querySelector(`#quantity_of_product`)
          .removeEventListener(`input`, arguments.callee);
      });
    return false;
  } else {
    document.querySelector(`#quantity_of_product-block`).style.display = "none";
  }
  return true;
}
