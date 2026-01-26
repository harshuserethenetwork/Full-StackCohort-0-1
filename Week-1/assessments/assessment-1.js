//Assessment-1: Print all even numbers from an given array and sort them in ascending order.

const assessment = (arr) => {
  let resultedArray = [];
  let sortedArray = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sortedArray.push(arr[i]);

      //Compare Function: function(a, b){a-b}
      resultedArray = sortedArray.sort(function (a, b) { a - b});
    } else {
      continue;
    }
  }
  // Printing final answer
  console.log(resultedArray);
};

module.exports = assessment;
