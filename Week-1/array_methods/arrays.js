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
    const folders = [["file1.txt", "file2.txt"], ["image.png"], ["script.js", "style.css"]];
    const result = folders.reduce((accumulator, currentSubArray) => {
         return accumulator.concat(currentSubArray)
    }, [])
    
    console.log(result)
}

//Problem - 4: Task: Group names by whether they are "Adults" or "Minors".

module.exports = {
  arrayReduceMethod,
  arrayReduceMethodTwo,
  calculateTheCartPrice,
  flatenTheNestedArray
};
