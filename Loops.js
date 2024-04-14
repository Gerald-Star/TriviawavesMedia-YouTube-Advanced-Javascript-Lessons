/** The above code is a for loop that prints numbers from 1 to 10.
 *  The loop starts with i = 1 and increments i by 1 in each iteration. 
 * The loop continues as long as i is less than or equal to 10.
 */

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// The above code calculates the sum of numbers from 1 to 10 using a for loop.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum);



// The above  defines a function called printNumbers that takes two parameters: start and end.
function printNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

printNumbers(1, 10);


// The code defines a function called calculateSum that takes two parameters: start and end.
function calculateSum(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  console.log("Sum:", sum);
}

calculateSum(1, 10);


var beatles = ["John", "Paul", "Ringo", "George"];

for (num = 0; num < 4; num++) {
  //document.write(beatles[num] + "<br>");
  console.log(beatles[num]);
  

}
