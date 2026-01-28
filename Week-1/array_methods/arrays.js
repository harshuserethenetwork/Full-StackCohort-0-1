// Array Method - REDUCE
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

//Array Method - FIND  X==============================================X
// Problem 9: The "High Priority" Task
// Context: You are building a Todo application. Every task has a priority level. You need to identify the first task that is marked as "High" priority so the user can be notified.

const findHighPriorityTask = () => {
  const tasks = [
    { id: 1, title: "Emails", priority: "Low" },
    { id: 2, title: "Prepare Presentation", priority: "Medium" },
    { id: 3, title: "Server Crash Fix", priority: "High" },
    { id: 4, title: "Client Call", priority: "High" },
  ];

  const result = tasks.find((task) => {
    return task.priority === "High";
  });

  console.log(result);
};

// Problem 2: The "Overdraft" Finder
// Context: A bank manager wants to see the first account that has a negative balance to check for potential credit issues.

const findOverdraft = () => {
  const balances = [1500, 2300, 450, -12, 500, -200];

  const result = balances.find((bal) => {
    if (bal < 0) {
      return bal;
    }
  });

  console.log(result);
};

// Problem 3: Finding a Specific Profile
// Context: You have a database of users. You need to implement a search feature that locates a user by their unique username.

const findUserFromSearch = (username) => {
  const users = [
    { username: "john_doe", email: "john@example.com" },
    { username: "jane_smith", email: "jane@example.com" },
    { username: "dev_expert", email: "expert@code.com" },
  ];

  const result = users.find((user) => {
    return user.username === username;
  });

  const isUser = result ? result : "No user found with username " + username;
  console.log(isUser);
};

// //Array Method - INCLUDE  X==============================================X
// Problem 1: The "Restricted Keyword" Filter
// Context: You are building a comment section for a blog. You want to check if a user's comment contains any "banned" words before posting it.

const checkForRestrictedComments = (userComment) => {
  const bannedWords = ["spam", "advertisement", "clickbait"];

  const breakString = userComment.split(" ");
  let ans = "";

  breakString.forEach((elem) => {
    const isBanned = bannedWords.includes(elem);
    if (isBanned) {
      let len = elem.length;
      ans += "*".repeat(len);
    } else {
      ans += elem;
    }
    ans += " ";
  });

  console.log(ans);

  //  result.forEach((word) => {
  //    let restrictedWord = "";
  //   const wordLength = word.length;
  //   for(let i = 0; i <= wordLength; i++){
  //     restrictedWord += "*"
  //   }

  //   const splitText = userComment.split(" ");
  //   splitText.forEach((elem) => {
  //     const isContains = bannedWords.includes(elem);
  //     if(isContains){
  //       const test = elem.replace(elem, restrictedWord);
  //       console.log(test)
  //     }
  //   })

  //  })
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
  findHighPriorityTask,
  findOverdraft,
  findUserFromSearch,
  checkForRestrictedComments,
};
