function BigComputer(answer) { 
  this.the_answer = answer; 
  this.ask_question = function () { 
    return this.the_answer; 
  } 
} 

var test;
var deep_thought = new BigComputer(42); 
var the_meaning = deep_thought.ask_question(); 
var x = 1;
debugger;
