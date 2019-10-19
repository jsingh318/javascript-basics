const createPerson = (name, age) => {
  return {name: name,
          age: age};
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  return object[property] ? true:false;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(e => {return e.age});
};

const findByName = (name, people) => {
  return people.filter(people => people.name === name)[0];
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === 'Honda');
};

const averageAge = people => {
  let ages = people.map(e => {return e.age});
  return ages.reduce((a,b) => a + b, 0) / ages.length;
};

const createTalkingPerson = (name, age) => {
//return ; (still working)
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
