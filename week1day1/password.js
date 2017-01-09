var argument = process.argv[2];

function obfuscate(argument) {
  var newString = "";
  if(argument.length == 0) {
    return newString;
  }

  for(var i = 0; i < argument.length; i++) {
    switch(argument.charAt(i)) {
    case "a":
      newString += 4;
      break;
    case "e":
      newString += 3;
      break;
    case "o":
      newString += 0;
      break;
    case "l":
      newString += 1;
      break;
    default:
      newString += argument.charAt(i);
      break;
    }
  }
  return newString;
}


console.log(obfuscate(argument));
