function luhnCheck(num) {
  sNumber = num.toString();
  var accountDouble = [];
  var sum = 0;
  var checkDigit;

  for (var i = 0; i < sNumber.length-1; i ++) {

    if ((sNumber.length - i) % 2 === 0) {

      var numberToPush = parseInt(sNumber.charAt(i))*2;
      numberToPush = numberToPush > 9 ? (numberToPush - 9) : numberToPush;

      accountDouble.push(numberToPush);
      sum+=numberToPush;

    }
    else { 
      var numberToPush = parseInt(sNumber.charAt(i));
      accountDouble.push(numberToPush);
      sum+=numberToPush;
    }
  }

  checkDigit = (sum*9) % 10;

  return (checkDigit == sNumber.charAt(sNumber.length-1));
}

module.exports = luhnCheck;
