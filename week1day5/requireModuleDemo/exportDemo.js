 var beNice = function(name) {
   console.log(`Hi ${name} have a wonderful day!`);
 };

var beMean = function(name) {
   console.log(`Piss off ${name} D=`);
};

var beNeutral = function(name) {
  console.log(`Greetings fellow human ${name}`);
};

var demoFunction = {
  greet: function(name, niceness) {
    
    if (niceness > 5){
      return beNice(name);
    }

    if(niceness < 5) {
      return beMean(name);
    }

    return beNeutral(name);
  },
  humaness: 10,

};

module.exports = demoFunction;
