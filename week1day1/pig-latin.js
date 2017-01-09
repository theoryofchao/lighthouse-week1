var arguments = process.argv.slice(2);

function pigLatinify(words) {
  var pigLatinString = "";

  for(var i = 0; i < words.length; i++) {

    pigLatinString += words[i].slice(1, words[i].length) + words[i].charAt(0) + "ay ";
  }
  return pigLatinString;
}

console.log(pigLatinify(arguments));
