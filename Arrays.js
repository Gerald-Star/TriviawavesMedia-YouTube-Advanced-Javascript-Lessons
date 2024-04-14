/**Arrays in JavaScript are used to store multiple values in a single variable.
Here are some common types of arrays use cases and code samples:

1. Numeric Array:

Stores a list of numeric values.
**/

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1

/*
2. String Array:

Stores a list of string values.
*/

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // apple

/*
3. Boolean Array:

Stores a list of boolean values.
*/

let flags = [true, false, true, true];
console.log(flags[0]); // true
console.log(flags[1]); // false

/*
4. Object Array:

Stores a list of objects.
*/

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

/*
5. Mixed Array:

Stores a mix of different data types.
These are just a few examples of the different types of arrays and their usage.
You can use arrays to store and manipulate data in various ways based on your specific needs.

*/


let mixed = [1, 'apple', true, { name: 'John' }];
console.log(mixed); // [1, 'apple', true, { name: 'John' }]

/*
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
const slicedFruit = fruitTypes.slice(1, 3);
console.log(slicedFruit); // ["banana", "grapes"] // returns a new array

//7. Array.prototype.concat() with length property
const moreFruits = ['strawberry', 'blueberry'];
console.log(fruitTypes.concat(moreFruits));
// ["peach", "banana", "grapes", "watermelon", "strawberry", "blueberry"] // returns a new array

const allFruits = fruitTypes.concat(moreFruits);
console.log(allFruits.length); // 6 // returns the new length of the array

fruitTypes.length = 0;
console.log(fruitTypes); // [] // empty the array

//8. Array.prototype.indexOf() with length property
const indexArray = allFruits.indexOf('banana');
console.log(indexArray); // 1 // returns the index of the element

//9. Array.prototype.includes() with length property
const include = allFruits.includes('apple');
console.log(include); // false // returns true or false

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
const numberArrays = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numberArrays); // [1, 2, 0, 0, 5] // returns the modified array

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

//15. Array.prototype.filter() with length property
const evenNumbers = numberMap.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4] // returns a new array

//16. Array.prototype.reduce() with length property
const sum = numberMap.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15 // returns the accumulated value

const fruitPrices = [2, 3, 4, 5, 6];
const totalCost = fruitPrices.reduce((acc, price) => acc + price, 0);
console.log(totalCost); // 20 // returns the accumulated value




//!  ARRAY METHODS FOREACH() Array.prototype.forEach()

// The forEach() method executes a provided function once for each array element.
// The forEach() method does not change the original array.
// The forEach() method does not return a value.
// The forEach() method uses the callback function for every element in the array.
// The callback function can take up to three arguments: currentValue, index, and array.
// The callback function is not invoked for empty slots in the array.
// The forEach() method is an alternative to using a for loop to iterate over an array.
// The forEach() method does not execute the function for array elements without values.

// forEach() method with countries array

let countries = ['Finland', 'Sweden', 'Norway'];
countries.forEach((country) => console.log(country));

// Finland
// Sweden
// Norway

// ! same as

let cities = ['Helsinki', 'Stockholm', 'Oslo'];
cities.forEach(function (city) {
  console.log(city)
})
// Helsinki
// Stockholm
// Oslo

// Using key-value pairs in forEach() method

let Europe = ['Finland', 'Sweden', 'Norway'];
Europe.forEach((country, index) => console.log(index, country));
// 0 "Finland"
// 1 "Sweden"
// 2 "Norway"

let people = [{ name: 'John', location: 'NYC' }, { name: 'Jane', location: 'Cali' }, { name: 'Bob', location: 'Texas' }];
people.forEach(function (person) {
  console.log(person.name, person.location)
})

// John NYC
// Jane Cali
// Bob Texas

let student = [{ class: 'A', name: 'John' }, { class: 'B', name: 'Jane' }, { class: 'C', name: 'Bob' }];
student.forEach(function (person) {
  console.log(person.class, person.name)
  //return person.name // returns the name of the person John, Jane, Bob

});
// A John
// B Jane
// C Bob
