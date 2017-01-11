var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },

};

//List everyone and for each of them, list the names of who they follow and who follows them
var listAll = function() {
  for (var entry in data){
    
    console.log(data[entry].name,"follows");

    for (var i = 0; i < data[entry].follows.length; i++) {
      console.log("-"+data[data[entry].follows[i]].name);
    }

    console.log("is followed by");
    for(var entry2 in data){
      if (data[entry2].follows.includes(entry)){
        console.log("-"+data[entry2].name);
      }
    }
  }
};

var mostFollows = function(age) {

  var ageLimit = age;

  var mostFollowGroup = [];

  if(typeof age == 'undefined'){
    ageLimit = 0;
  }

  var id;
  var most=0;

  for (var entry in data) {

    var followersOfAge = [];

    for(var i = 0; i < data[entry].follows.length; i++) {
      if (data[data[entry].follows[i]].age >= age) {
        followersOfAge.push(data[data[entry].follows[i]].name);
      }
    }
    console.log(followersOfAge);

    if(followersOfAge.length > most) {
      most = followersOfAge.length;
      mostFollowGroup = [];
      mostFollowGroup.push(entry); 
    }
    else if (followersOfAge.length == most) {
      mostFollowGroup.push(entry);
    }
  }

  for(var i=0; i<mostFollowGroup.length; i++){
    console.log(data[mostFollowGroup[i]]);
  }

};

var mostFollowers = function(age) {

  var ageLimit=age;

  if(typeof age == 'undefined'){
    ageLimit = 0;
  }

  var id;
  var most=0;
  var followerList={};


  for (var entry in data){
    var followers=[];
    for(var entry2 in data){

      if (data[entry2].follows.includes(entry) && data[entry2].age >= ageLimit){
        followers.push(entry2);
      }
    }
    followerList[entry] = followers;
    most = followers.length > most ? followers.length : most;
    
  }
  console.log(most);
  for (var item in followerList) {
    if(followerList[item].length == most) {
      console.log(data[item].name);
    }
  }
};

var whoDidntFollow = function(){
  for(var entry in data) {
    var all = ["f01","f02","f03","f04","f05","f06",];

    var diff = arr_diff(all, data[entry].follows);
    console.log(diff);
  }
};

function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
};

var listReach = function() {

  for(var entry in data) {
    var numFollow=data[entry].follows.length;
    
    var numFollowers=getNumFollowers(entry);
    var reach = numFollow + numFollowers;

    console.log(data[entry].name,":",reach);
  }
};

var getNumFollowers = function(id) {
  var followers = 0;

  for(entry in data) {
    if(data[entry].follows.includes(id)){
      followers++;
    }
  }
  return followers;
};

