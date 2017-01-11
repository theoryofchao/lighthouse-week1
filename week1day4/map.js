var words = ["ground", "control", "to", "major", "tom"];

var map = function(_lyrics,getWordLength) {
  var wordsLength = [];
  words.forEach(function(element) {
    wordsLength.push(getWordLength(element));
  });
  

  console.log(wordsLength);
};

var lyrics = function() {

};

map(lyrics, function(word) {
    return word.length;
});
