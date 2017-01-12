const users_list_1 = [
  {
    name: 'Jane Doe',
    hobbies: ['soccer', 'boxing'],
    age: 29,
  },
  {
    name: 'John Doe',
    hobbies: ['soccer'],
    age: 39,
  }
];


const countHobbies = function(user) {
  return user.hobbies.length;
};

const customMap = function(data, callback) {
  
  const array = [];

  for(let i = 0; i < data.length; i++) {
    const current = data[i];
    var hobbiesLength = callback(current);
    array.push(hobbiesLength);
  }

  return array;
};

console.log(customMap(users_list_1, countHobbies));

var result = users_list_1.map(countHobbies);

console.log(result);

