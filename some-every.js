function hasOddNumber(arr) {
  return arr.some(function (num) {
    return num % 2 !== 0;
  });
}

function hasAZero(num) {
  return num //needed to start with return
    .toString()
    .split("")
    .some(function (val) {
      return val === "0";
    });
}

function hasOnlyOddNumbers(arr) {
  return arr.every(function (num) {
    //adjust from some to every
    return num % 2 !== 0;
  });
}

function hasNoDuplicates(arr) {
  return arr.every(function (num) {
    return arr.indexOf(num) === arr.lastIndexOf(num);
  });
}

function hasCertainKey(arr, key) {
  return arr.every(function (obj) {
    //every goes through each element in the array
    return key in obj; // the in operator returns true if the specified property is in the specified object
  });
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {}
