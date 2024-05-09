function checkOperator(obj) {
  const validOperator = /^[+\-*/%]$/;
  if (!validOperator.test(obj.sign)) {
    alert(`Ви ввели не коректний знак`);
    obj.sign = prompt(`Введіть коректний знак`);
    checkOperator(obj);
  }
}

class SuperMath {
  check(obj) {
    if (confirm(`Ви хочете обробити цю дію?`)) {
      const result = eval(`${obj.x}${obj.sign}${obj.y}`);
      alert(result);
    } else this.input();
  }
  input() {
    const newObj = {};
    newObj.x = prompt(`введіть перше число`);
    newObj.y = prompt(`введіть друге число`);
    newObj.sign = prompt(`введіть знак матемтичної дії`);
    checkOperator(newObj);

    this.check(newObj);
  }
}
const sth = new SuperMath();
sth.check({ x: 12, y: 3, sign: `+` });
