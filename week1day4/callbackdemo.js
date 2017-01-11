var sayHello = function(){
  console.log("Hello!");
};

var saySentence = function(greeting, gossip){
  greeting();
};

saySentence(sayHello, 'blah');
