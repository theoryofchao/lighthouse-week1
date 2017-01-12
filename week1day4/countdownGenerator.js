var countdownGenerator = function (x) { 
  var counter = x;
  
  return function() {
    if (counter > 0){
      counter--;
      console.log("T-minus",counter+1,"...");
      return;
    }
    else if (counter == 0) {
      console.log("Blast Off!"); 
      counter--;
      return;
    }
    else {
      console.log("Rocket already gone, bub!");
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
