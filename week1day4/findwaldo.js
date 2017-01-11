// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function findWaldo2(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);
    }
  });
}

function actionWhenFound(index) {
    console.log("Found him at index",index+"!");
}

findWaldo2(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
