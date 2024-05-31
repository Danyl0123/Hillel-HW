"use strict";

var fetchCity = document.querySelector("select");
fetchCity.addEventListener("change", function () {
  var city = fetchCity.options[fetchCity.selectedIndex].textContent;
  var apiLink =
    "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=5d066958a60d315387d9492393935c19&units=metric";
  var chosenCityLink = apiLink.replace("Kyiv", city);
  fetch(chosenCityLink)
    .then(function (response) {
      return response.json();
    })
    .then(function (elem) {
      var iconId = elem.weather[0].icon;
      var div = document.querySelector(".city-info");
      div.textContent = "The tempretature is  "
        .concat(Math.round(elem["main"]["temp"]), "\xB0C (Feels like ")
        .concat(Math.round(elem["main"]["feels_like"]), "\xB0C).Description: ")
        .concat(elem["weather"][0]["description"]);
      document
        .querySelector("img")
        .setAttribute(
          "src",
          "http://openweathermap.org/img/w/".concat(iconId, ".png")
        );
    });
  document.querySelector("#weather-block").style.display = "flex";
});
