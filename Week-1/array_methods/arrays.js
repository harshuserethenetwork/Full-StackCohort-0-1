// Problem-1:
// Write a function that returns the sum of all numbers in an array.
// Example Input: [10, 20, 30]
// Example Output: 60

const arrayReduceMethod = (arr) => {
  const sum = arr.reduce((accumulator, currentValue) => {
    const result = accumulator + currentValue;
    return result;
  }, 0);

  console.log(sum);
};

// //Problem - 2
// Given an array of items (e.g., Basket), use the .reduce() method to iterate through the list and construct a "tally" object. For every item encountered:

// If the item already exists as a key in the object, increment its value by 1.
// If it does not exist, initialize its value to 1.

// Input: An array of strings: ["apple", "banana", "apple", ...]
// Output: A single object containing the count of each string: { apple: 3, banana: 2, orange: 1 }
const arrayReduceMethodTwo = (itemBasket) => {
  const result = itemBasket.reduce((accumulator, item) => {
    accumulator[item] = (accumulator[item] || 0) + 1;
    return accumulator;
  }, {});

  console.log(result);
};

// Problem - 3 In real apps, you don't usually have a simple array of numbers like [10, 20]. You have an array of objects (like a shopping cart).
// Task: Calculate the total price of all items in the cart.

const calculateTheCartPrice = () => {
  const cart = [
    { item: "Laptop", price: 1000 },
    { item: "Mouse", price: 50 },
    { item: "Keyboard", price: 150 },
  ];

  const result = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);
  console.log(result);
};

//Problem - 4: Task: Flatten the nested arrays into one single array.
const flatenTheNestedArray = () => {
  const folders = [
    ["file1.txt", "file2.txt"],
    ["image.png"],
    ["script.js", "style.css"],
  ];
  const result = folders.reduce((accumulator, currentSubArray) => {
    return accumulator.concat(currentSubArray);
  }, []);

  console.log(result);
};

//Problem - 5: Task: Group names by whether they are "Adults" or "Minors".
const groupTheNames = () => {
  const people = [
    { name: "Rahul", age: 25 },
    { name: "Simran", age: 17 },
    { name: "Amit", age: 30 },
    { name: "Pooja", age: 15 },
  ];

  const grouped = people.reduce((acc, person) => {
    const category = person.age >= 18 ? "Adult" : "Minor";

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(person.name);
    return acc;
  }, {});

  console.log(grouped);
};

//Problem - 6: Task: Given an array of numbers, find the largest number in the list.
const findMaximumNumber = (arr) => {
  const result = arr.reduce((accumulator, currentValue) => {
    return accumulator >= currentValue ? accumulator : currentValue;
  }, arr[0]);

  console.log(result);
};

//Problem -7: Task: Calculate total amount of e-com bill and excude the products which is out of stock.
const calculateTotalBill = () => {
  const cart = [
    { name: "iPhone", price: 70000, inStock: true },
    { name: "Screen Guard", price: 500, inStock: false },
    { name: "Case", price: 1200, inStock: true },
  ];

  const result = cart.reduce((total, product) => {
    const result = product.inStock ? total + product.price : total;
    return result;
  }, 0);

  console.log(result);
};

//Problem -8: Task: You have many blog posts, and each post has its own tags. You need to create a “Trending Tags” list in which no tag is repeated.
//Expected Output: ["js", "web", "react", "node"]
const trendingTagsTrail = () => {
  const posts = [
    { title: "Post 1", tags: ["js", "web"] },
    { title: "Post 2", tags: ["web", "react"] },
    { title: "Post 3", tags: ["js", "node"] },
  ];

  const result = posts.reduce((tagList, posts) => {
    const tags = tagList.concat(posts.tags);
    return tags;
  }, []);

  console.log(result);
};

module.exports = {
  arrayReduceMethod,
  arrayReduceMethodTwo,
  calculateTheCartPrice,
  flatenTheNestedArray,
  groupTheNames,
  findMaximumNumber,
  calculateTotalBill,
  trendingTagsTrail,
};
