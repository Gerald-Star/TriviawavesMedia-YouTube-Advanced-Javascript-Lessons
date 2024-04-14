# DOM ELEMENT

## Google DOM by w3school and MDN to lear more

### getElementByClassName

getElementById() and getElementsByClassName() are similar to our friend querySelector(). getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique in a page, they are a useful way to quickly get access to a specific element. An ID should be unique within a page, however, if a page has more than one element with the specified ID, then getElementById() returns the first element that matches. If no elements with the specified ID exist, it returns null.


# What is a Function in JavaScript?

A function is a block of code that performs a specific task. It is executed when "something" invokes it (calls it).

## Search- W3school

### Javascript String length Property 
### Javascript events

### Function validations

### What is Loop in JavaScript?

In JavaScript, a loop is a programming construct that allows you to repeatedly execute a block of code. It provides a way to automate repetitive tasks and iterate over a collection of data or perform a specific action a certain number of times.

There are several types of loops in JavaScript, but the most commonly used ones are the `for` loop, the `while` loop, and the `do-while` loop.

The `for` loop is often used when you know the number of iterations in advance. It consists of three parts: initialization, condition, and increment/decrement. In your code snippet, the `for` loop is used to iterate from `i = 1` to `i <= 10`, incrementing `i` by 1 in each iteration.

Here's a breakdown of the `for` loop in your code:

1. Initialization: `let i = 1` initializes the loop variable `i` to 1.
2. Condition: `i <= 10` specifies the condition that must be true for the loop to continue executing. As long as `i` is less than or equal to 10, the loop will continue.
3. Increment: `i++` increments the value of `i` by 1 after each iteration.

Inside the loop, the `console.log(i)` statement is executed, which outputs the value of `i` to the console. This will print the numbers from 1 to 10 in the console.

Once `i` becomes 11 (because of the increment), the condition `i <= 10` becomes false, and the loop terminates.

Let me know if you have any further questions!


## setTimeout()

setTimeout() is a built-in JavaScript function that allows you to delay the execution of a piece of code for a specified amount of time. It takes two arguments: a callback function and a delay time in milliseconds.

You can use setTimeout() when you want to schedule a function to run after a certain delay. This can be useful for implementing animations, creating timed events, or adding delays between function calls.


# JAVASCRIPT ARRAYS FOR BEGINNERS WITH USE CASES

## Array Types and Methods with Use Cases and Sample Codes for Beginners

## What is an Array?

An array is a data structure that stores a collection of elements. It is used to organize and manipulate related data items. Arrays are commonly used in programming to store and access multiple values of the same type.

Some use cases for arrays include:
- Storing a list of names, numbers, or any other type of data.
- Implementing data structures like stacks, queues, and hash tables.
- Sorting and searching algorithms.
- Representing matrices and multi-dimensional data.
- Implementing dynamic data structures like linked lists and trees.

Arrays provide a convenient way to work with collections of data and are widely used in various programming scenarios.


## Array Types and sample code

Arrays in JavaScript are used to store multiple values in a single variable.
Javascript Arrays are zero indexed meaning that the;

- first element of an array is at index 0
- - second element of an array is at index 1
- - third element of an array is at index 2
- - first element of an array is at index 3 and so on etc.
  
Here are some common types of arrays and code samples:

1. Numeric Array:

Stores a list of numeric values.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1

2. String Array:

Stores a list of string values.

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // apple

3. Boolean Array:

Stores a list of boolean values.

let flags = [true, false, true, true];
console.log(flags[0]); // true
console.log(flags[1]); // false

4. Object Array:

Stores a list of objects.

let students = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 22 },
  { name: 'Bob', age: 19 }
];
console.log(students[0].name); // John
console.log(students[1].age); // 22
console.log(students[2].name); // Bob
console.log(students[2].age); // 19
console.log(students[0].age); // 20

5. Mixed Array:

Stores a mix of different data types.
These are just a few examples of the different types of arrays and their usage.
You can use arrays to store and manipulate data in various ways based on your specific needs.

let mixed = [1, 'apple', true, { name: 'John' }];
console.log(mixed); // [1, 'apple', true, { name: 'John' }]


### ARRAY METHODS WITH SAMPLE CODES

6. Array Methods:

Arrays in JavaScript come with a variety of built-in methods that allow you to manipulate and work with the array data. Here are some commonly used array methods:

- push(): Adds one or more elements to the end of an array.
- pop(): Removes the last element from an array.
- shift(): Removes the first element from an array.
- unshift(): Adds one or more elements to the beginning of an array.
- splice(): Changes the contents of an array by removing or replacing existing elements.
- slice(): Returns a new array containing a portion of the original array.
- concat(): Joins two or more arrays and returns a new array.
- indexOf(): Returns the first index at which a given element can be found in the array.
- includes(): Determines whether an array contains a certain element.
- join(): Joins all elements of an array into a string.
- reverse(): Reverses the order of the elements in an array.
- sort(): Sorts the elements of an array in place.

Here are some examples of how to use these array methods:

*/

//! push()
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

//! pop()
fruits.pop();
console.log(fruits); // ['apple', 'banana']

//! shift()
flags.shift();
console.log(flags); // [false, true, true]

//! unshift()
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6]

//! splice()
numbers.splice(2, 2);
console.log(numbers); // [0, 1, 4, 5, 6]

//! slice()
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ['banana', 'orange']

//! concat()
let combinedArray = numbers.concat(fruits);
console.log(combinedArray); // [0, 1, 4, 5, 6, 'apple', 'banana', 'orange']

//! indexOf()
let index = numbers.indexOf(4);
console.log(index); // 2

//! includes()
let includes = flags.includes(true);
console.log(includes); // true

//! join()
let joinedArray = combinedArray.join(', ');
console.log(joinedArray); // "0, 1, 4, 5, 6, apple, banana, orange"

//! reverse()
numbers.reverse();
console.log(numbers); // [6, 5, 4, 1, 0]

//! sort()
numbers.sort();
console.log(numbers); // [0, 1, 4, 5, 6]




//! ARRAY METHODS INTERMEDIATE WITH SAMPLE CODES
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//1. Array.prototype.push() with length property

const fruitTypes = [];
fruitTypes.push('apple', 'banana', 'orange', 'mango', 'kiwi');
console.log(fruitTypes); // ["apple", "banana", "orange", "mango", "kiwi"]
console.log(fruitTypes.length); // 5
console.log(fruitTypes.push('grapes')); // 6 // returns the new length of the array

//2. Array.prototype.pop() with length property

const removedFruit = fruitTypes.pop();
console.log(removedFruit); // grapes // returns the removed element- remove the last element

//3. Array.prototype.shift() with length property
const firstFruit = fruitTypes.shift();
console.log(firstFruit); // apple // returns the removed element- remove the first element

//4. Array.prototype.unshift() with length property
const newLength = fruitTypes.unshift('peach');
console.log(newLength); // 5 // returns the new length of the array- add the element to the beginning

//5. Array.prototype.splice() with length property
const removedItems = fruitTypes.splice(2, 1, 'grapes', 'watermelon');
console.log(removedItems); // ["orange"] // returns the removed elements

//6. Array.prototype.slice() with length property
const slicedFruits = fruitTypes.slice(1, 3);
console.log(slicedFruits); // ["banana", "grapes"] // returns a new array

//7. Array.prototype.concat() with length property
const moreFruits = ['strawberry', 'blueberry'];
console.log(fruitTypes.concat(moreFruits));
// ["peach", "banana", "grapes", "watermelon", "strawberry", "blueberry"] // returns a new array

const allFruits = fruitTypes.concat(moreFruits);
console.log(allFruits.length); // 6 // returns the new length of the array

fruitTypes.length = 0;
console.log(fruitTypes); // [] // empty the array

//8. Array.prototype.indexOf() with length property
const index = allFruits.indexOf('banana');
console.log(index); // 1 // returns the index of the element

//9. Array.prototype.includes() with length property
const includes = allFruits.includes('apple');
console.log(includes); // false // returns true or false

//10. Array.prototype.join() with length property
const joinedFruits = allFruits.join(', ');
console.log(joinedFruits);
// "peach, banana, grapes, watermelon, strawberry, blueberry" // returns a string

//11. Array.prototype.reverse() with length property
allFruits.reverse();
console.log(allFruits);
// ["blueberry", "strawberry", "watermelon", "grapes", "banana", "peach"]
// returns the reversed array

//12. Array.prototype.sort() with length property
allFruits.sort();
console.log(allFruits);
// ["banana", "blueberry", "grapes", "peach", "strawberry", "watermelon"]

//13. Array.prototype.fill() with length property
const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numbers); // [1, 2, 0, 0, 5] // returns the modified array

fruitTypes[3] = 'mango';
console.log(fruitTypes[3]); // mango // modify an element at a specific index
console.log(fruitTypes.length); // 1 // returns the new length of the array
console.log(Object.keys(fruitTypes)); // ["3"] // returns the keys of the array






//! ARRAY METHODS AND EMPTY SLOTS
/**
 * Increasing the length of an array by extending the array empty slots
 *  without creating new elements
 */
fruitTypes = // ["apple", "banana", "orange", "mango", "kiwi"]
  fruitTypes = ["apple", "banana", "orange", "mango", "kiwi"]
console.log(fruitTypes.length); // 5

// ! extending the array empty slots without creating new elements
fruitTypes.length = 10;
console.log(fruitTypes); // ["apple", "banana", "orange", "mango", "kiwi", <5 empty items>]
// returns the extended array
console.log(Object.keys(fruitTypes)); // ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// returns the keys of the array
console.log(fruitTypes.length); // 10 // returns the new length of the array
console.log(fruitTypes[6]); // undefined // returns undefined for empty slots

fruitTypes.length = 3;
console.log(fruitTypes); // ["apple", "banana", "orange"] // returns the truncated array
console.log(Object.keys(fruitTypes)); // ["0", "1", "2"] // returns the keys of the array

//14. Array.prototype.map() with length property
const numberMap = [1, 2, 3, 4, 5];
const squaredNumbers = numberMap.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25] // returns a new array

//15. Array.prototype.filter() with length property
const evenNumbers = numberMap.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4] // returns a new array

//16. Array.prototype.reduce() with length property
const sum = numberMap.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15 // returns the accumulated value






//! ARRAY MAP()METHOD  Array.prototype.map()

// The map() method creates a new array by calling a function on each element of the original array.
// The map() method does not change the original array.
// The map() method returns a new array with the results of the function call.
// The map() method does not execute the function for array elements without values.
// The map() method uses the callback function for every element in the array.
// The callback function can take up to three arguments: currentValue, index, and array.
// The callback function must return a value to be included in the new array.
// The callback function is not invoked for empty slots in the array.


//14. Array.prototype.map() with length property
const arrayMap = [1, 2, 3, 4, 5];
const map1 = arrayMap.map((x) => x * 2);
console.log(map1); // [2, 4, 6, 8, 10] // returns a new array
// The map() method creates a new array with the results of the function call
//on each element in the array.

const map2 = arrayMap.map((x, index) => index);
console.log(map2); // [0, 1, 2, 3, 4] // returns a new array

const map3 = arrayMap.map((x, index, array) => array);
console.log(map3); // [[

const map4 = arrayMap.map((x, index, array) => array.length);
console.log(map4); // [5, 5, 5, 5, 5] // returns a new array

const map5 = arrayMap.map((x, index, array) => array[index]);
console.log(map5); // [1, 2, 3, 4, 5] // returns a new array

const map6 = arrayMap.map((x, index, array) => array[index] * index);
console.log(map6); // [0, 2, 6, 12, 20] // returns a new array

const roots = arrayMap.map(Math.sqrt);
console.log(roots); // [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]

const numbersArrays = [1, 4, 9];
const doubles = numbersArrays.map(num => num * 2);
console.log(doubles); // [2, 8, 18] // returns a new array

const rootArrays = numbersArrays.map((num) => Math.sqrt(num));
console.log(rootArrays); // [1, 2, 3] // returns a new array

const numberMap = [1, 2, 3, 4, 5];
const squaredNumbers = numberMap.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25] // returns a new array


Always add websites to learn more
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map





## MATHS METHOD FUNCTION

The Math object in JavaScript provides various mathematical operations and functions. Some commonly used methods include:

Math.abs(x): Returns the absolute value of x.
Math.ceil(x):

The Math object in JavaScript provides various mathematical operations and functions. Some commonly used methods include:

- Math.abs(x): Returns the absolute value of x.
- Math.ceil(x): Returns the smallest integer greater than or equal to x.
- Math.floor(x): Returns the largest integer less than or equal to x.
- Math.round(x): Returns the value of x rounded to the nearest integer.
- Math.max(x1, x2, ...): Returns the largest value among the given arguments.
- Math.min(x1, x2, ...): Returns the smallest value among the given arguments.
- Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).
- Math.sqrt(x): Returns the square root of x.

These are just a few examples. The Math object provides many more methods for performing various mathematical calculations.