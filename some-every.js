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

function hasCertainValue(arr, key, searchValue) {
  return arr.every(function (obj) {
    return obj[key] === searchValue; //returns true if any property in the obj matches the searchValue
  });
}
