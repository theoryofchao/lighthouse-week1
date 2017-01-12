function isPalindrome(s) {

  var newString = s.replace(/\s+/g, "");
  console.log(newString);
  var stringReverse = newString.split("").reverse().join("");
  return newString == stringReverse;
}

module.exports = isPalindrome;
