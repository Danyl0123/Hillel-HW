const input = document.querySelector(`.input`);
const sendBtn = document.querySelector(`.search-btn`);
let apended = false;

const createElementInBody = (elem, text) => {
  const element = document.createElement(elem);
  element.textContent = text;
  document.body.append(element);
  apended = true;
};

const removeElement = (...element) => {
  document.querySelectorAll(element).forEach((elem) => elem.remove());
  apended = false;
};

const sendRequest = (url, value) =>
  fetch(`${url}${value}`).then((data) => data.json());

sendBtn.addEventListener(`click`, function () {
  if (apended) {
    removeElement(`div`, `h1`, `button`, `h3`, `p`);
  }
  const value = input.value;
  if (value < 1 || value > 100) {
    createElementInBody(`div`, `Значення повинно бути від 1 до 100`);
  } else {
    if (apended) {
      removeElement(`div`);
    }
    sendRequest(`https://jsonplaceholder.typicode.com/posts`, `/${value}`)
      .then((result) => {
        createElementInBody(`h1`, result.title);
        createElementInBody(`div`, result.body);
      })
      .catch((error) => alert(error));
    createElementInBody(`button`, `show comments`);
    const button = document.querySelector(`button`);
    button.addEventListener(`click`, function () {
      if (apended) {
        removeElement(`h3`, `p`);
      }
      createElementInBody(`h3`, `Comments:`);
      sendRequest(
        `https://jsonplaceholder.typicode.com/comments`,
        `?postId=${value}`
      )
        .then((data) =>
          data.forEach((elem) => createElementInBody(`p`, elem.body))
        )
        .catch((error) => alert(error));
    });
  }
});
