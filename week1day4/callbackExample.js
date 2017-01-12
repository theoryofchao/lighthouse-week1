
var myFilter = function(inputArray, callback) {
  var output = [];
 
  inputArray.forEach(function(element) {

    if(callback(element)){
      output.push(element);
    }

  });
  return output;
};

var divisibleByTwo = function(number) {
  return (number % 2 === 0);
};

var input = [1,2,3,4,5,6,7,8,9,10];

console.log(myFilter(input, divisibleByTwo));
