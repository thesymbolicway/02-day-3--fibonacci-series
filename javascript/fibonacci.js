function fibonacci(num) {
  let a = 0;
  let b = 1;
  if (num === 0) return a;
  if (num === 1) return b;
  for (let i = 2; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// 1. Create a variable "a" and set it to 0
// 2. Create a variable "b" and set it to 1
// 3. If the input value "num" is 0, return 0
// 4. Else if the input value "num" is 1, return 1
// 5. Else, create a for loop that starts at 2 and ends at "num"
//     a. Within the for loop, create a variable "c" and set it to the sum of "a" and "b"
//     b. Set "a" to the value of "b"
//     c. Set "b" to the value of "c"
// 6. Return "b"