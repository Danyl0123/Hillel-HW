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
  const clientNameArray = object[`client_name`].split(" ");
  if (clientNameArray[clientNameArray.length - 1] === "") clientNameArray.pop();

  if (clientNameArray.length < 2 || clientNameArray.length > 3) {
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
