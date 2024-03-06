const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

//Знайти суму та кількість позитивних елементів.
let arrOfPostive = arr.filter(function (element) {
  if (element > 0) return element;
});
let sum = 0;
arrOfPostive.forEach(function (element) {
  return (sum += element);
});
console.log(`Сума позитивних елементів - ${sum}`);
console.log(`Кількість пзитивних чисел - ${arrOfPostive.length}`);

// Знайти мінімальний елемент масиву та його порядковий номер.

let minValue = arr[0];
let minIndex = 0;
arr.forEach(function (element, index) {
  if (element < minValue) {
    minValue = element;
    minIndex = index;
  }
});
console.log(`мінімальне значення - ${minValue},його індекс - ${minIndex}`);

//Знайти максимальний елемент масиву та його порядковий номер.

let maxValue = arr[0];
let maxIndex = 0;
arr.forEach(function (element, index) {
  if (element > maxValue) {
    maxValue = element;
    maxIndex = index;
  }
});
console.log(`максимальне значення - ${maxValue}, його індекс - ${maxIndex}`);

//Визначити кількість негативних елементів.
const arrOfNegative = arr.filter(function (element) {
  if (element < 0) return element;
});
const numberOfNegative = arrOfNegative.length;
console.log(`Кількість негативних чисел - ${numberOfNegative}`);

//Знайти кількість непарних позитивних елементів.

const arrOfPostiveUnpaired = arrOfPostive.filter(function (element) {
  if (element % 2 != 0) return element;
});
const numberOfPositiveUnpaired = arrOfPostiveUnpaired.length;
console.log(
  `Кількість позитивних непарних чисел - ${numberOfPositiveUnpaired}`
);

//Знайти кількість парних позитивних елементів.
const arrOfPostivePaired = arrOfPostive.filter(function (element) {
  if (element % 2 === 0) return element;
});
const numberOfPositivePaired = arrOfPostivePaired.length;
console.log(`кількість позитивних і парних чисел - ${numberOfPositivePaired}`);

//Знайти суму парних позитивних елементів.
const sumOfPositivePaired = arrOfPostivePaired.reduce(function (acc, element) {
  return acc + element;
}, 0);
console.log(`сума позитивних парних чисел - ${sumOfPositivePaired}`);

//Знайти суму непарних позитивних елементів.
const sumOfPositiveUnpaired = arrOfPostiveUnpaired.reduce(function (
  acc,
  element
) {
  return acc + element;
},
0);
console.log(`сума позитивних непарних чисел - ${sumOfPositiveUnpaired}`);

//Знайти добуток позитивних елементів.

const multiOfPositive = arrOfPostive.reduce(function (acc, element) {
  return acc * element;
}, 1);
console.log(` добуток поизитивних чисел - ${multiOfPositive}`);

//Знайти найбільший серед елементів масиву, ост альні обнулити.

const newArr = arr.map(function (element) {
  if (element === maxValue) return maxValue;
  else return 0;
});
console.log(newArr);
