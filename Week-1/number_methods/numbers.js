// ✅ Problem 1: Convert String to Number and Add

// Description:
// Write a function that takes a string representing a decimal number and adds 49.25 to it.
// Return the final numeric result.
// Input: "250.75"
// Output: 300

const convertStringIntoNumber = (str) => {
  const add = 49.25;
  const num = Number(str);
  const result = num + add;
  console.log(result);
};

// ✅ Problem 2: Round a Price to Two Decimal Places

// Description:
// Write a program that rounds a given price to exactly 2 decimal places.
// Input: 199.9876
// Outpu: 199.99

const roundPrice = (value) => {
  const num = Number(value);
  const result = num.toFixed(2);

  console.log(result);
};

// ✅ Problem 3: Find the Largest Number in an Array

// Description:
// Write a function that returns the largest number from an array without using sorting.
// Input: [12, 45, 2, 99, 23]
// Output: 99

const findLargestNumberFromArray = (arr) => {
  const integerArray = arr.map((num) => Number(num));
  const result = Math.max(...integerArray);
  console.log(result);
};

// ✅ Problem 5: Generate a 6-Digit Random OTP

// Description:
// Write a function that generates a random 6-digit OTP.
// The OTP must always be exactly 6 digits.
// Output: 834291 (This can be any number but should be 6 digit).

const generateSixDigitOTP = () => {
  const max = 1000000;
  const min = 100000;
  const otp = Math.floor(Math.random() * (max - min) + min);
  console.log(otp);
};

// ✅ Problem 6: Validate a Numeric Value

// Description:
// Write a function that checks whether a given value can be converted into a valid number.
// Return "Valid number" or "Invalid number".
// Input: "12abc"
// Output: "Invalid number"
const validateNumericValue = (value) => {
   if(isNaN(value)){
    console.log("Invalid number");
   }else{
    console.log("Valid number");
   }
};

module.exports = {
  convertStringIntoNumber,
  roundPrice,
  findLargestNumberFromArray,
  generateSixDigitOTP,
  validateNumericValue
};
