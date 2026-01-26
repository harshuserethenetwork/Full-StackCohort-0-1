const getLength = (str) => {
  console.log("Original String: ", str);
  console.log("Length of a String: ", str.length);
};

const indexOfString = (str, target) => {
  console.log("Original String: ", str);
  console.log("IndexOf String: ", str.indexOf(target));
};

const lastIndexOfString = (str, target) => {
  console.log("Original String: ", str);
  console.log("IndexOf String: ", str.lastIndexOf(target));
};

const getSlicedValue = (str, startIndex, endIndex) => {
  console.log("Original String: ", str);
  console.log("Sliced String: ", str.slice(startIndex, endIndex));
};

const getSubString = (str, startIndex, endIndex) => {
  console.log("Original String: ", str);
  console.log("Using Sub String: ", str.substring(startIndex, endIndex));
};

const getReplaceString = (str, selectString, replacement) => {
  console.log("Original String: ", str);
  console.log("Replaced String: ", str.replace(selectString, replacement));
};

const getSplitString = (str, splitBy, limit) => {
  console.log("Original String: ", str);
  console.log("Split String: ", str.split(splitBy, limit));
};

const getTrimString = (str) => {
  console.log("Original String: ", str);
  console.log("Trim String: ", str.trim());
};

const getUpperCase = (str) => {
  console.log("Original String: ", str);
  console.log("Uppercase String: ", str.toUpperCase());
};

const getLowerCase = (str) => {
  console.log("Original String: ", str);
  console.log("Lowercase String: ", str.toLowerCase());
};

module.exports = {
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
};
