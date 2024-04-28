const fetchCity = document.querySelector(`select`);
fetchCity.addEventListener(`change`, function () {
  const city = fetchCity.options[fetchCity.selectedIndex].textContent;
  const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=5d066958a60d315387d9492393935c19&units=metric`;
  const chosenCityLink = apiLink.replace(`Kyiv`, city);
  fetch(chosenCityLink)
    .then((response) => response.json())
    .then((elem) => {
      const iconId = elem.weather[0].icon;
      const div = document.querySelector(`.city-info`);
      div.textContent = `The tempretature is  ${Math.round(
        elem[`main`][`temp`]
      )}°C (Feels like ${Math.round(
        elem[`main`][`feels_like`]
      )}°C).Description: ${elem[`weather`][0][`description`]}`;
      document
        .querySelector(`img`)
        .setAttribute(`src`, `http://openweathermap.org/img/w/${iconId}.png`);
    });
  document.querySelector(`#weather-block`).style.display = `flex`;
});
