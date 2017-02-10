const testArray = [1,2,3,4,5,6,7,8,9,10,11,13,14,16,20,30];
// const testArray = [1,2,3,4,6,7,8,11,20,5,9,10,14,13,16,30];
const testValue = 6;

const binarySearch = (array,value) => {
  let min = 0;
  let max = array.length -1;
  let number;

  while (min <= max) {
    number = Math.floor((min+max)/2);

    if (array[number] === value) {
      return number;
    }
    else if (array[number] < value) {
      min = number +1;
    }
    else {
      max = number -1;
    }
  }
  return -1;
};

console.log("the index of " + testValue + " is " + binarySearch(testArray, testValue));
