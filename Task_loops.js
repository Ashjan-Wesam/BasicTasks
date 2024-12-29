// 1- Write a program that prints numbers from 1 to 10 using a for loop.

for(let i = 1 ; i <= 10 ; i++){

    console.log(i);
}


// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

for(let i = 1 ; i <= 10 ; i++){

    if(i%2==0){
         console.log(i);
    }
}


// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

for(let i = 1 ; i <= 10 ; i++){

    if(i%2!=0){
         console.log(i);
    }
}

for(let i = 1 ; i <= 10 ; i++){

    if(i%2==0){

        continue;
    }
    else{
        console.log(i);
    }
}


// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

const number2 = parseInt(prompt("Enter a number to display its multiplication table:"));
console.log(`Multiplication Table of ${number}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}


// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

let sum = 0;
let num = 1;


while(num <= 100 && num >= 1){

    sum += num;
    num++;

}

console.log(sum);


// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

// const number = parseInt(prompt("Enter a number to calculate its factorial:"));
let prompt = require('prompt-sync') ();
let number = prompt("Enter a number to calculate its factorial: ");
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial = factorial * i; 
  }
console.log(factorial);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

let num2 = parseInt(prompt("Enter a number to generate Fibonacci series up to that number:"));

let a = 0, b = 1;
let fibonacciSeries = "Fibonacci series: ";

if (num <= 0) {
    console.log("Please enter a positive number.");
} else {
    fibonacciSeries += a;

    while (b <= num) {
        fibonacciSeries += " " + b;
        let nextNumber = a + b;
        a = b;
        b = nextNumber;
    }

    console.log(fibonacciSeries);
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.


let numbers = [5, 10, 15, 20];

let reversedNumbers = numbers.reverse();

let index = 0;

while (index < reversedNumbers.length) {
  console.log(reversedNumbers[index]);
  index++;
}
