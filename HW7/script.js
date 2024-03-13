const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, item) {
  const newArr = arr.filter(function (element) {
    if (element !== item) return element;
  });
  return newArr;
}
