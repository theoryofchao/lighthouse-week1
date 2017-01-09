var stringList = process.argv.slice(2);

function reverse(strings) {

  for(var i = 0; i < strings.length; i++) {

    if(strings[i].length == 1) {
      console.log(strings[i]);
    }

    else {

      var newString = "";

      for( var j = strings[i].length-1; j >= 0; j--) {
          newString += strings[i].charAt(j);
      }

      console.log(newString);
    }
  }
}

reverse(stringList);
