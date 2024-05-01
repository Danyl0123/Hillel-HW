"use strict";

var input = document.querySelector(".input");
var sendBtn = document.querySelector(".search-btn");
var apended = false;
var createElementInBody = function createElementInBody(elem, text) {
  var element = document.createElement(elem);
  element.textContent = text;
  document.body.append(element);
  apended = true;
};
var removeElement = function removeElement() {
  for (var _len = arguments.length, element = new Array(_len), _key = 0; _key < _len; _key++) {
    element[_key] = arguments[_key];
  }
  document.querySelectorAll(element).forEach(function (elem) {
    return elem.remove();
  });
  apended = false;
};
var sendRequest = function sendRequest(url, value) {
  return fetch("".concat(url).concat(value)).then(function (data) {
    return data.json();
  });
};
sendBtn.addEventListener("click", function () {
  if (apended) {
    removeElement("div", "h1", "button", "h3", "p");
  }
  var value = input.value;
  if (value < 1 || value > 100) {
    createElementInBody("div", "\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 1 \u0434\u043E 100");
  } else {
    if (apended) {
      removeElement("div");
    }
    sendRequest("https://jsonplaceholder.typicode.com/posts", "/".concat(value)).then(function (result) {
      createElementInBody("h1", result.title);
      createElementInBody("div", result.body);
    })["catch"](function (error) {
      return alert(error);
    });
    createElementInBody("button", "show comments");
    var button = document.querySelector("button");
    button.addEventListener("click", function () {
      if (apended) {
        removeElement("h3", "p");
      }
      createElementInBody("h3", "Comments:");
      sendRequest("https://jsonplaceholder.typicode.com/comments", "?postId=".concat(value)).then(function (data) {
        return data.forEach(function (elem) {
          return createElementInBody("p", elem.body);
        });
      })["catch"](function (error) {
        return alert(error);
      });
    });
  }
});