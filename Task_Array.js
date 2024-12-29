// 1-Write a function to find the largest element in an array.

function largeElement(arr){

    console.log(Math.max(...arr));
    

}
largeElement([1 , 5 , 13 , 9 , 2])




// 2-Write a function to find the smallest element in an array.

function smallElement(arr){

    console.log(Math.min(...arr));
    

}
smallElement([1 , 5 , 13 , 9 , 2])

// 3-Write a function to find the sum of all elements in an array.

function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; 
    }
    console.log(sum);
  }

  sumArray([1 , 5 , 13 , 9 , 2])

// 4-Write a function to find the average of all elements in an array.

function avgArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; 
    }
    console.log(sum / arr.length);
  }

  avgArray([1 , 5 , 13 , 9 , 2])


// 5-Write a function to find the median of all elements in an array.

function medianElement(arr){

    arr = arr.sort((a, b) => a - b);
    let numOfElements = arr.length;
    if(numOfElements % 2 != 0){

        let mid = Math.floor(numOfElements / 2);
        let median = arr[mid];
        console.log(arr)
        console.log(median)
    }
    else{
        let mid = Math.floor(numOfElements / 2);
        let median = (arr[mid] + arr[mid-1]) / 2;
        console.log(arr)
        console.log(median)
    }
    
}
medianElement([1 , 5 , 13 , 9 , 2 ,7 ])




// 6-Write a function to remove all duplicates from an array.

function removeDuplicatedItems(arr){

    let newArr = [];
    for(let i = 0 ; i < arr.length ; i++){

        if(!newArr.includes(arr[i])){

          newArr.push(arr[i]);
        }
    }
    console.log(newArr);

}
removeDuplicatedItems([1 ,3, 5 , 5 , 13 , 1 , 4 , 2 , 9 , 6 , 3 , 2 ])

// 7-Write a function to sort an array in ascending order.

function sortArrayAsc(arr) {

  let sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr);
}
sortArrayAsc([1 , 51 , 3 , 9 , 2 ,7 ])

// 8-Write a function to sort an array in descending order.

function sortArrayDec(arr) {

  let sortArr = arr.sort((a, b) => b - a);
  console.log(sortArr);
}
sortArrayDec([1 , 51 , 3 , 9 , 2 ,7 ])


// 9-Write a function to shuffle the elements of an array randomly.

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }
  console.log(arr);
}
shuffleArray([1 , 51 , 3 , 9 , 2 ,7 ])