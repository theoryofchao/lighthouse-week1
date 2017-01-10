var stringToCount = process.argv[2];

function countLetters(string) {
  var letterCounter = {};

  for(var i = 0; i < string.length; i++) {
    if(string[i] != ' '){
      if(typeof letterCounter[string[i]] == 'undefined') {
        letterCounter[string[i]] = 1;
      }
    
      else {
        letterCounter[string[i]]++;
      }
    }
  }

  console.log(letterCounter);
}

countLetters(stringToCount);
