var prices = [20, 25, 54];

var calculateTotal = function(cartPrices){
  var total = 0;
  cartPrices.forEach(function(itemPrice) {
    total+=itemPrice;
  });
  console.log(total);
};

calculateTotal(prices);

//var calculateTotal = function () {...}; //function expressions
//function calculateTotal() {...} //function declaration (can be called early via hoisting)
