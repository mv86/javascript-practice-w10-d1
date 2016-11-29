//Section 1

//what types are these? Write your answer in a comment beside it.

1; // Number
"cat"; // String
true; // Boolean
[]; // Object
{}; // Object
1.1; // Number
undefined; // Undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; //false
""; //false
0; //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var number = 1;

//3.2 Assign a variable that is a string
var string = "Hello";

//3.3 Assign a variable that is a boolean
var boolean = true;

//3.4 Assign a variable that is an object
var object = {};

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
if (var1 === var2) {
  console.log("hello");
} else {
  console.log("bye");
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstElement = animals[0];

//5.2. Assign the last element to a variable
var lastElement = animals[(animals.length -1)];

//5.3. Assign the length of an array to a variable
var lengthOfArray = animals.length;

//5.4. Add an item to the end of the array
animals.push("hamster");

//5.5. Add an item to the start of the array
animals[0] = "pig";

//5.6. Assign the index of hedgehog to a variable
var hedgehogIndex = animals.indexOf("hedgehog");

//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["carrot", "brocolli", "beetroot", "kale", "chard"];

//6.2 Loop over the array and write to the console using a "while"
counter = 0;

while (counter < vegetables.length) {
  console.log("You have: " + vegetables[counter]);
  counter++;
}

//6.3 Loop again using a "for" with a counter
for (i = 0; i < vegetables.length; i++) {
  console.log("You have: " + vegetables[i]);
}

//6.4 Loop again using a "for of"
for (vegetable of vegetables) {
  console.log("You have: " + vegetable);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

//7.1 Calculate the total cash in accounts
counter = 0

for (money of accounts) {
  counter += money.amount;
}

console.log(counter);

//7.2 Find the amount of money in the account with the largest balance
function findHighestAmmount() {
  var highestAmmount = 0;
  for (account of accounts) {
    if (highestAmmount < account.amount) {
      highestAmmount = account.amount;
    }
  }
  return highestAmmount;
}

console.log(findHighestAmmount());

//7.3 Find the name of the account with the smallest balance
function findSmallestAmmount() {
  highestAmmount = findHighestAmmount();
  var smallestAmmount = 0;
  for (account of accounts) {
    if (highestAmmount > account.amount) {
      highestAmmount = account.amount;
    }
  }
  smallestAmmount = highestAmmount;
  return smallestAmmount;
}

console.log(findSmallestAmmount());

//7.4 Calculate the average bank account value
function averageAccountValue() {
  counter = 0;
  for (account of accounts) {
    counter += account.amount;
  }
  counter = (counter / accounts.length);
  averageAccountValue = Math.round(counter * 100) / 100;
  return   averageAccountValue;
}

console.log(averageAccountValue());

//7.5 Find the value of marcs bank account
for (account of accounts) {
  if (account.name === "marc") {
    var marcAccountAmount = account.amount;
  }
}

console.log(marcAccountAmount);

//7.6 Find the holder of the largest bank account
function findHolderOfHighestAmmount() {
  var highestAmmount = 0;
  var highestAmmountHolder = []
  for (account of accounts) {
    if (highestAmmount < account.amount) {
      highestAmmount = account.amount;
      highestAmmountHolder.push(account);
    }
  }
  accountHolder = highestAmmountHolder.pop();
  return accountHolder.name;
}

console.log(findHolderOfHighestAmmount());

//7.7 Calculate the total cash in business accounts
var totalMoneyInAccounts = 0

for (account of accounts) {
  if (account.type === 'business') {
  totalMoneyInAccounts += account.amount;
  }
}

console.log(totalMoneyInAccounts);

//7.8 Find the largest personal account owner
function findHolderOfHighestPersonalAmmount() {
  var highestAmmountPersonal = 0;
  var highestAmmountPersonalAccountHolder = []
  for (account of accounts) {
    if (account.type === 'personal' && highestAmmountPersonal < account.amount) {
      highestAmmountPersonal = account.amount;
      highestAmmountPersonalAccountHolder.push(account);
    }
  }
  personalAccountHolder = highestAmmountPersonalAccountHolder.pop();
  return personalAccountHolder.name;
}

console.log(findHolderOfHighestPersonalAmmount());

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "John",
  height: 1.68,
  favouriteFood: "Buger & Chips",
  eat: function() {console.log("I am eating " + this.favouriteFood + "!")}
}