const getNthElement = (index, array) => {
  return array[index];
  //if (i = 0, i > array.length, i++); 
  //return array[i]; (ignore)
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
 //   return array.push(element); (ignore)
};

const addToArray2 = (element, array) => {
  let newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(",");
};

const uppercaseWordsInArray = strings => {
  return strings.map(function(e){ return e.toUpperCase()});
};

const reverseWordsInArray = strings => {
  return strings.map(function(e){ return e.split("").reverse().join("")});
};

const onlyEven = numbers => {
  return numbers.filter(value => value % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
