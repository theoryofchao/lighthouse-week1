var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}


var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var counter = 0;

  return function() {
      counter++;
      return list[counter-1];
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6
