//Assessment-2: Write a program to print a biggest number from the array.

const assessment = (arr) => {
  let max = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(max);
};

module.exports = assessment;
