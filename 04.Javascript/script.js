// ==========================================
// JAVASCRIPT CRASH COURSE
// ==========================================

// ==========================================
// 1. VARIABLES AND DATA TYPES
// ==========================================

// Variable Declaration
// var - function scoped, can be redeclared (avoid using)
var oldWay = "I'm old school";
// let - block scoped, can be reassigned
let modernWay = "I'm modern";
// const - block scoped, cannot be reassigned
const constantValue = "I cannot change";

// Data Types
let stringExample = "Hello World"; // String
let numberExample = 42; // Number
let booleanExample = true; // Boolean
let nullExample = null; // Null
let undefinedExample; // Undefined
let objectExample = { name: "John", age: 30 }; // Object
let arrayExample = [1, 2, 3, 4, 5]; // Array
let symbolExample = Symbol("description"); // Symbol (ES6+)

// ==========================================
// 2. OPERATORS
// ==========================================

// Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // Addition: 15
console.log(num1 - num2); // Subtraction: 5
console.log(num1 * num2); // Multiplication: 50
console.log(num1 / num2); // Division: 2
console.log(num1 % num2); // Modulus: 0
console.log(num1 ** num2); // Exponentiation: 100000
console.log(num1++); // Increment: 10
console.log(num2--); // Decrement: 5

// Comparison Operators
console.log(num1 == num2); // Equal to (loose)
console.log(num1 === num2); // Equal to (strict)
console.log(num1 != num2); // Not equal to (loose)
console.log(num1 !== num2); // Not equal to (strict)
console.log(num1 > num2); // Greater than
console.log(num1 < num2); // Less than
console.log(num1 >= num2); // Greater than or equal to
console.log(num1 <= num2); // Less than or equal to

// Logical Operators
console.log(true && true); // AND: true
console.log(true || false); // OR: true
console.log(!true); // NOT: false

// ==========================================
// 3. CONDITIONALS
// ==========================================

// If-Else Statement
let personAge = 20;
if (personAge >= 18) {
  console.log("You are an adult");
} else if (personAge >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

// Switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week");
    break;
  default:
    console.log("Regular day");
}

// ==========================================
// 4. LOOPS
// ==========================================

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// While Loop
let loopCount = 0;
while (loopCount < 3) {
  console.log(`Count: ${loopCount}`);
  loopCount++;
}

// Do-While Loop
let doCount = 0;
do {
  console.log(`Do Count: ${doCount}`);
  doCount++;
} while (doCount < 3);

// For...of Loop (for arrays and other iterables)
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

// For...in Loop (for object properties)
const person = { name: "John", age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ==========================================
// 5. FUNCTIONS
// ==========================================

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const greetExpression = function (name) {
  return `Hi, ${name}!`;
};

// Arrow Function (ES6+)
const greetArrow = (name) => `Hey, ${name}!`;

// Function with default parameters
function multiply(a, b = 1) {
  return a * b;
}

// ==========================================
// 6. ARRAYS AND OBJECTS
// ==========================================

// Array Methods
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Add to end
numbers.pop(); // Remove from end
numbers.unshift(0); // Add to beginning
numbers.shift(); // Remove from beginning
numbers.map((num) => num * 2); // Transform elements
numbers.filter((num) => num > 2); // Filter elements
numbers.reduce((acc, curr) => acc + curr, 0); // Reduce to single value

// Object Methods
const userProfile = {
  userName: "John",
  profileAge: 30,
  greet() {
    return `Hello, I'm ${this.userName}`;
  },
};

// Object destructuring
const { userName, profileAge } = userProfile;

// ==========================================
// 7. DOM MANIPULATION
// ==========================================

// Selecting elements
const changeTextBtn = document.getElementById("change-color");
const textElement = document.getElementById("change-text");

// Changing content
changeTextBtn.addEventListener("click", () => {
  textElement.textContent = "Text has been changed!";
  textElement.style.color = "blue";
});

// Creating elements
const newElement = document.createElement("div");
newElement.textContent = "I'm a new element";
document.body.appendChild(newElement);

// ==========================================
// 8. EVENTS AND EVENT LISTENERS
// ==========================================

const clickMeBtn = document.getElementById("click-me");
const eventOutput = document.getElementById("event-output");

clickMeBtn.addEventListener("click", (event) => {
  eventOutput.textContent = `Button clicked at ${new Date().toLocaleTimeString()}`;
});

// ==========================================
// 9. FORM HANDLING AND VALIDATION
// ==========================================

const demoForm = document.getElementById("demo-form");
const formOutput = document.getElementById("form-output");

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  // Basic validation
  if (username.length < 3) {
    formOutput.textContent = "Username must be at least 3 characters long";
    return;
  }

  if (!email.includes("@")) {
    formOutput.textContent = "Please enter a valid email address";
    return;
  }

  formOutput.textContent = `Form submitted! Username: ${username}, Email: ${email}`;
});

// ==========================================
// 10. TIMERS
// ==========================================

const startTimerBtn = document.getElementById("start-timer");
const pauseTimerBtn = document.getElementById("pause-timer");
const resumeTimerBtn = document.getElementById("resume-timer");
const cancelTimerBtn = document.getElementById("cancel-timer");
const timerOutput = document.getElementById("timer-output");

let timerInterval;
let timerCount = 0;
let isPaused = false;
let startTime;
let pausedTime = 0;

// Function to update button states
function updateButtonStates(start, pause, resume, cancel) {
  startTimerBtn.disabled = start;
  pauseTimerBtn.disabled = pause;
  resumeTimerBtn.disabled = resume;
  cancelTimerBtn.disabled = cancel;
}

// Function to format time
function formatTime(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return `${hours.toString().padStart(2, "0")}:${(minutes % 60)
    .toString()
    .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
}

// Start Timer
startTimerBtn.addEventListener("click", () => {
  // Clear any existing interval
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  // Reset variables
  timerCount = 0;
  isPaused = false;
  pausedTime = 0;
  startTime = Date.now();

  // Update display and button states
  timerOutput.textContent = formatTime(0);
  updateButtonStates(true, false, true, false);

  timerInterval = setInterval(() => {
    timerCount = Date.now() - startTime - pausedTime;
    timerOutput.textContent = formatTime(timerCount);
  }, 10); // Update every 10ms for smooth display
});

// Pause Timer
pauseTimerBtn.addEventListener("click", () => {
  if (timerInterval && !isPaused) {
    clearInterval(timerInterval);
    isPaused = true;
    pausedTime += Date.now() - startTime - pausedTime - timerCount;
    updateButtonStates(true, true, false, false);
  }
});

// Resume Timer
resumeTimerBtn.addEventListener("click", () => {
  if (isPaused) {
    // Continue from where it was paused
    isPaused = false;
    startTime = Date.now();

    // Update button states
    updateButtonStates(true, false, true, false);

    timerInterval = setInterval(() => {
      timerCount = Date.now() - startTime - pausedTime;
      timerOutput.textContent = formatTime(timerCount);
    }, 10);
  }
});

// Cancel Timer
cancelTimerBtn.addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // Reset everything
  timerCount = 0;
  isPaused = false;
  pausedTime = 0;
  timerOutput.textContent = formatTime(0);
  updateButtonStates(false, true, true, true);
});

// ==========================================
// 11. ERROR HANDLING
// ==========================================

const triggerErrorBtn = document.getElementById("trigger-error");
const errorOutput = document.getElementById("error-output");

triggerErrorBtn.addEventListener("click", () => {
  try {
    // Simulating an error
    throw new Error("This is a custom error!");
  } catch (error) {
    errorOutput.textContent = `Error caught: ${error.message}`;
  } finally {
    console.log("This will always execute");
  }
});

// ==========================================
// 12. ES6+ FEATURES
// ==========================================

// Template Literals
const userName2 = "John";
const greeting = `Hello, ${userName2}! Welcome to ES6+`;

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const { title, description, ...otherProps } = {
  title: "My Title",
  description: "My Description",
  extra: "Extra Info",
};

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// ==========================================
// 13. BEST PRACTICES
// ==========================================

// Use meaningful variable names
const userAge = 25; // Good
const a = 25; // Bad

// Use const by default, let when needed
const API_KEY = "12345"; // Good for constants
let counter = 0; // Good for variables that change

// Use proper indentation and spacing
function wellFormattedFunction() {
  if (condition) {
    // Do something
  }
}

// Use comments for complex logic
// Calculate the fibonacci sequence up to n terms
function fibonacci(n) {
  // Implementation
}

// Use modern JavaScript features when possible
const modernFunction = () => {
  // Implementation
};
