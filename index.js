// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:

function changeCompletely(element, index, arraay) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + `${array[index]}s!!!`;
}

var animals [ "dog", "cat", "squirrel"];

doToElementsInArray(aanimals, changeCompletely);

console.log(animals);
