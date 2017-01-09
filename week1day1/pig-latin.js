var arguments = process.argv.slice(2);

function pigLatinify(words) {
  var pigLatinString = "";

  var pigLatinArray = [];

  for(var i = 0; i < words.length; i++) {

    pigLatinString += words[i].slice(1, words[i].length) + words[i].charAt(0) + "ay ";

    pigLatinArray.push(words[i].slice(1, words[i].length) + words[i].charAt(0) + "ay");
  }
  var str = pigLatinArray.join(" ");
  return str;
}

console.log(pigLatinify(arguments));
