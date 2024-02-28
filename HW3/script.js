const year = +prompt("Введіть ваш рік народження.");
if (isNaN(year)) {
  alert("Введіть число.");
} else {
  let conclusionYear;
  if (year === 0) {
    alert(`Жаль,що ви не захотіли ввести свій рік народження.`);
    conclusionYear = `Ви не захотіли ділитися своїм роком народження.`;
  } else {
    conclusionYear = `Ваш рік народження - ${year}.`;
  }
  const city = prompt("Введіть місто,де ви проживаєте.");
  let conclusionCity;
  if (city === null) {
    alert(`Жаль,що ви не захотіли ділитися своїм містом.`);
    conclusionCity = `Ви не захотіли ділитися містом,де ви проживаєте.`;
  } else {
    switch (city) {
      case "Лондон":
        conclusionCity = "Ви живете в столиці Англії -  в Лондоні.";
        break;
      case "Київ":
        conclusionCity = "Ви живете в столиці України - в Києві.";
        break;
      case "Вашингтон":
        conclusionCity = "Ви живете в столиці США - в Вашингтоні.";
        break;
      default:
        conclusionCity = `Ви живете в місті ${city}.`;
        break;
    }
  }
  const sport = prompt("Введіть ваш улюблений вид спорту.");
  let conclusionSport;
  if (sport === null) {
    alert(`Жаль,що ви не захотіли ввести свій улюблений вид спорту.`);
    conclusionSport = `Ви не захотіли ввести свій улюблений вид спорту.`;
  } else {
    switch (sport) {
      case "футбол":
        conclusionSport = "Круто!Хочеш грати як Роналду?";
        break;
      case "баскетбол":
        conclusionSport = "Круто!Хочеш грати как Стеф Каррі?";
        break;
      case "гонки":
        conclusionSport = "Круто!Хочеш їздити как Хемільтон?";
        break;
      default:
        conclusionSport = `Твій улюблений вид спорта - ${sport}.`;
    }
  }

  alert(`
${conclusionYear} 
${conclusionCity}  
${conclusionSport}`);
}
