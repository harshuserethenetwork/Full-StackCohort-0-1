//Assessment-4: Write a program that reverse all the elements of an array

const assessment = (arr) => {
  let reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  console.log(reversedArray);
};

module.exports = assessment;
