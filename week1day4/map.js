var words = ["ground", "control", "to", "major", "tom"];

var map = function(lyrics,getWordLength) {
  var wordsLength = [];
  lyrics.forEach(function(element) {
    wordsLength.push(getWordLength(element));
  });
  

  console.log(wordsLength);
};

map(words, function(word) {
    return word.length;
});
