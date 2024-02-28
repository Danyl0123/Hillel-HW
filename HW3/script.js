const year = +prompt("Введите ваш год рождения.");
if (isNaN(year)) {
  alert("Введите число");
} else {
  let conclusionYear;
  if (year === 0) {
    alert(`Жаль,что вы не захотели ввести свой год рождения.`);
    conclusionYear = `Вы не захотели делиться годом своего рождения.`;
  } else {
    conclusionYear = `Твой год рождения - ${year}.`;
  }
  const city = prompt("Введите город в котором живете");
  let conclusionCity;
  if (city === null) {
    alert(`Жаль,что вы не захотели ввести свой город.`);
    conclusionCity = `Вы не захотели делиться городом в котором живете.`;
  } else {
    switch (city) {
      case "Лондон":
        conclusionCity = "Вы живете в столице Англии -  в Лондоне.";
        break;
      case "Киев":
        conclusionCity = "Вы живете в столице Украины - в Киеве.";
        break;
      case "Вашингтон":
        conclusionCity = "Вы живете в столице США - в Вашингтоне.";
        break;
      default:
        conclusionCity = `Вы живете в городе ${city}.`;
        break;
    }
  }
  const sport = prompt("Введите ваш лююбимый вид спорта.");
  let conclusionSport;
  if (sport === null) {
    alert(`Жаль,что вы не захотели ввести свой любимый вид спорта.`);
    conclusionSport = `Вы не захотели делиться своим любимым видом спорта.`;
  } else {
    switch (sport) {
      case "футбол":
        conclusionSport = "Круто!Хочешь играть как Роналду?";
        break;
      case "баскетбол":
        conclusionSport = "Круто!Хочешь играть как Стеф Карри?";
        break;
      case "гонки":
        conclusionSport = "Круто!Хочешь ездить как Хэмильтон?";
        break;
      default:
        conclusionSport = `Твой любимый вид спорта - ${sport}.`;
    }
  }

  alert(`
${conclusionYear} 
${conclusionCity}  
${conclusionSport}`);
}
