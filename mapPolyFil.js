console.log('Polyfil of Map?');
// create an array containing random sample of ages
const ages = [23, 34, 45, 56, 16, 37, 41, 45, 67, 81];
// here we defined our myForEach function
// Polyfill code starts-
Array.prototype.myMap = function (callback) {
  // Always returns a new array.
  // Logic of for loop
  const returnAges = [];
  for (let i = 0; i < this.length; i++) {
    returnAges.push(callback(this[i], i, this));
  }
  return returnAges;
};
// Polyfill code ends
// here we using our myForEach function
ages.myMap((age) => console.log(age, age * 2));
