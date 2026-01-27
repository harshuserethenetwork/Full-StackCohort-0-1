const express = require("express");
const Assessment_1 = require("./assessments/assessment-1");
const Assessment_2 = require("./assessments/assessment-2");
const Assessment_3 = require("./assessments/assessment-3");
const Assessment_4 = require("./assessments/assessment-4");
const {
  getLength,
  indexOfString,
  lastIndexOfString,
  getSlicedValue,
  getSubString,
  getReplaceString,
  getSplitString,
  getTrimString,
  getUpperCase,
  getLowerCase,
} = require("./string_methods/strings");
const {
  convertStringIntoNumber,
  roundPrice,
  findLargestNumberFromArray,
  generateSixDigitOTP,
  validateNumericValue,
} = require("./number_methods/numbers");
const {
  arrayReduceMethod,
  arrayReduceMethodTwo,
  calculateTheCartPrice,
  flatenTheNestedArray,
} = require("./array_methods/arrays");
const app = express();
const PORT = 3000;

// Demo Object Data For Assessment- 3
const peopleData = {
  status: "success",
  count: 5,
  data: [
    {
      id: 1,
      personalInfo: {
        firstName: "Rahul",
        lastName: "Sharma",
        gender: "male",
        age: 28,
      },
      contact: {
        email: "rahul@example.com",
        phone: "9876543210",
      },
    },
    {
      id: 2,
      personalInfo: {
        firstName: "Anita",
        lastName: "Verma",
        gender: "female",
        age: 25,
      },
      contact: {
        email: "anita@example.com",
        phone: "9876501234",
      },
    },
    {
      id: 3,
      personalInfo: {
        firstName: "Amit",
        lastName: "Patel",
        gender: "male",
        age: 32,
      },
      contact: {
        email: "amit@example.com",
        phone: "9988776655",
      },
    },
    {
      id: 4,
      personalInfo: {
        firstName: "Sneha",
        lastName: "Iyer",
        gender: "female",
        age: 27,
      },
      contact: {
        email: "sneha@example.com",
        phone: "9123456789",
      },
    },
    {
      id: 5,
      personalInfo: {
        firstName: "Vikas",
        lastName: "Singh",
        gender: "male",
        age: 30,
      },
      contact: {
        email: "vikas@example.com",
        phone: "9001122334",
      },
    },
  ],
};

//Demo Array
const arr = [2, 5, 8, 4, 7, 9, 4, 1];

//All Assessment Funstions ---->
//You can uncomment the commented below Assessments In order to run it one by one and can check/test the outputs

// Assessment_1(arr);
// Assessment_2(arr);
// Assessment_3(peopleData);
// Assessment_4(arr);

// String Methods Below ----->

// getLength("Harsh");
// indexOfString("Harsh", "r");
// lastIndexOfString('Harsh', 'h');
// getSlicedValue("If mind forgets the heart will always remembered", 0, 20);
// getSubString("If mind forgets the heart will always remembered", 20, 25);
// getReplaceString("Welcome to C++", "C++", "JavaScript");
// getSplitString("Bulbasaur, Pikachu, Squirtal, Charmandar, Bayleaf", ",", 5);
// getTrimString("   This is the test String    ");
// getUpperCase("uppercase");
// getLowerCase("LOWERCASE");

// Number Methods Below ----->

// convertStringIntoNumber("250.75");
// roundPrice("199.9876");
// findLargestNumberFromArray(["1","5","2"]);
// generateSixDigitOTP();
// validateNumericValue("22dqwd")
// arrayReduceMethod([10, 20, 30]);
// arrayReduceMethodTwo(["kurkure", "maggie", "pasta", "maggie", "ketchup", "floor_cleaner", "mop", "kurkure"])
// calculateTheCartPrice();
// flatenTheNestedArray();
app.listen(PORT, () => {
  console.log("Hurray, Server Is Now Live!");
});
