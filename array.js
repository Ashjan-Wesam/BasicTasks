console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45 ,]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

//1- [1 , 7 , 9 , 45]
//2- ["Str" "alex","moh"]
//3- ['the','fox' 'over' lazy, 'dog']


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

//Banana --> 1
//Tomato --> 0

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

// let a = new Array(5);


let favoriteFood = [ 'Pizza', 'Sushi', 'Pasta', 'Burgers', 'Ice Cream'];
let favoriteSport = ['Football', 'Basketball', 'Tennis'];
let favoriteMovie = ['Inception', 'The Dark Knight', 'Interstellar', 'The Matrix'];


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr){

    return arr[0];

}
let array = ['t' , 'o' , 'u' , 'y']
console.log(firstOfArray(array));

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr){

    let len = arr.length;
    return arr[len - 1]
}
console.log(lastOfArray(array));



/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array2 = [0 , 5 , 7 , 9]

array2.shift();
array2.shift();
array2.shift();
array2.push(10);
array2.push(11);
array2.unshift(6 , 8);
array2.unshift(3 , 4);
array2.unshift(1);
array2.pop();

console.log(array2)



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5]
array2.push(3); 
array2.shift();
array2.unshift(2);
array2.pop();

console.log(array2)





/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr){

    let len = arr.length;
    if(len % 2 == 0){

        let mid = Math.floor(arr.length / 2);
        let median = `${arr[mid - 1]} and ${arr[mid]}`;
        console.log(median);

    }
    else{

        let mid = Math.floor(arr.length / 2);
        let median = arr[mid];
        console.log(median);

    }

}
middleOfArray(["t","u","g","x"])
middleOfArray(["t","u","g","x","v"])


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird']
animals[0] = 'zebra'
animals[1] = 'elephant'
animals.pop()

var nums= [1,2,3,8,9];
nums[0] = 5
nums[1] = -22
nums[2] = 3.5
nums[3] = 44
nums[4] = 98
nums[5] = 44



/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(arr , index){

    console.log(arr[index])

}
var nums= [1,2,3,8,9]
indexOfArray(nums,3) 
indexOfArray(nums,1) 
indexOfArray(nums,4)


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr){

    arr.pop();
    console.log(arr)
}
var nums= [1,2,3,8,9]
arrayExceptLast(nums)








/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arr , val){

    arr.pop()
    arr.push(val);
    console.log(arr)
}

var nums= [1,2,3,8,9]
addToEnd(nums,55)













// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(arr){

    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){

        sum = sum + arr[i];
        
    }
    console.log(sum);

}
function sumArray2(arr){

    let sum = 0;
    let i = 0;
    while( i < arr.length){

        sum = sum + arr[i];
        i++

    }
    
    console.log(sum);

}

var nums= [1,2,3,8,9]
sumArray(nums)
var nums2= [1,2,3,8,9]
sumArray2(nums2)




/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(arr){

    let min = arr[0];

    for(let i = 1 ; i < arr.length ; i++){

        if(arr[i] < min ){

            min = arr[i]
        }
    }

    console.log(min);

}

function minInArray2(arr){

    let min = arr[0];
    let i = 1;

    while(i < arr.length ){

        if(arr[i] < min ){

            min = arr[i]
        }
        i++
    }



    console.log(min);

}


var nums= [6,2,3,8,9]
minInArray(nums)

var nums2 = [6,2,3,8,9]
minInArray2(nums2)







/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(arr , element){

    for(let i = 0 ; i < arr.length ; i++){

        if(arr[i]===element){

            arr.splice(i , 1)
        }
    }
    console.log(arr);
}

function removeFromArray2(arr , element){

    let i = 0 ;
    while(i < arr.length ){

        if(arr[i]===element){

            arr.splice(i , 1)
        }
        i++

    }
   
    console.log(arr);
}

let numbers= [1,2,3,8,9]
removeFromArray(numbers,3)

let numbers2= [1,2,3,8,9]
removeFromArray2(numbers2,8)



/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//using for loop
function oddArray(arr){

    let newArr = []
    for(let i =  0 ; i < arr.length ; i++){

        if(arr[i] % 2 != 0){

            newArr.push(arr[i])

        }
    }
    console.log(newArr);


}

//using while
function oddArray2(arr){

    let newArr = [];
    let i =  0 ;
    while( i < arr.length){
        if(arr[i] % 2 != 0){


            newArr.push(arr[i])

        }
        i++
    }
    
    
    console.log(newArr);


}

var nums= [1,2,3,8,9]
oddArray(nums)
var nums2= [1,1,2,3,8,9,13]
oddArray2(nums2)









/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//using for loop
function aveArray(arr){

    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){

        sum = sum + arr[i];
        
    }
    let avg = sum / arr.length;
    console.log(avg)
}

//using while

function aveArray2(arr){

    let sum = 0;
    let i = 0 ;
    while(i < arr.length){

        sum = sum + arr[i];
        i++

    }
    
    let avg = sum / arr.length;
    console.log(avg)
}
var nums= [1,2,3,8,9]
aveArray(nums) 

var nums2= [1,2,3,8,9,77]
aveArray2(nums2) 


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr){

    let shortElement = arr[0]
    for(let i = 1 ; i < arr.length ; i++){

        
        if(arr[i].length < shortElement.length){

            shortElement = arr[i]

        }
    }
    console.log(shortElement)
}

function shorterInArray2(arr){

    let shortElement = arr[0]
    let i = 1 ;
    while(i < arr.length){

        if(arr[i].length < shortElement.length){

            shortElement = arr[i]

        }
        i++

    }
    
    console.log(shortElement)
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
shorterInArray(strings)


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//For loop

function repeatChar(s  , c){

    let arr = s.split("")
    let count = 0
    for(let i = 0 ; i < arr.length ; i++){

        if(arr[i].toUpperCase()===c.toUpperCase()){

            count++
        }
    }
    console.log(count)
    
}

//While loop

function repeatChar2(s  , c){

    let arr = s.split("")
    let count = 0;
    let i = 0 ;
    while(i < arr.length){
        if(arr[i].toUpperCase()===c.toUpperCase()){

            count++
        }
        i++
    }
   
    console.log(count)
    
}
repeatChar("alex mercer madrasa rashed2 emad hala"  , 'a')
repeatChar2("Ashjan"  , 'a')


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(arr){

    let newArr = []
    for(let i = 0 ; i < arr.length ; i++){

        if(arr[i].length % 2 != 0 && i % 2 == 0){

            newArr.push(arr[i])

        }
    }
    console.log(newArr);
}

function evenIndexOddLength2(arr){

    let newArr = []
    let i = 0 ;
    while(i < arr.length){
        if(arr[i].length % 2 != 0 && i % 2 == 0){

            newArr.push(arr[i])

        }
        i++
    }
    console.log(newArr);
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
evenIndexOddLength(strings);
evenIndexOddLength2(strings);








/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//Using for loop

function powerElementIndex(arr){

    let newArr = []
    
    for(let i = 0 ; i < arr.length ; i++){

        newArr.push(Math.pow(arr[i] , i))


    }
    console.log(newArr)

}

//Using While
function powerElementIndex2(arr){

    let newArr = []

    let i = 0 ;
    while(i < arr.length ){

        newArr.push(Math.pow(arr[i] , i));
        i++;
    }

    
    console.log(newArr)

}
var nums= [44, 5, 4, 3, 2, 10]
powerElementIndex(nums);
powerElementIndex2(nums);









/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//Using for loop 

function evenNumberEvenIndex(arr){

    let newArray = []
    for(let i = 0 ; i < arr.length ; i++){

        if(i % 2 == 0 && arr[i] % 2 == 0){

            newArray.push(arr[i])
        }
    }
    console.log(newArray)
}

//using while

function evenNumberEvenIndex2(arr){

    let newArray = []
    let i = 0;
    while(i < arr.length){

        if(i % 2 == 0 && arr[i] % 2 == 0){

            newArray.push(arr[i])
        }
        i++;

    }
    console.log(newArray)
}

// call functions
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
evenNumberEvenIndex(nums)
evenNumberEvenIndex2(nums)