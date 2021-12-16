//push, pop, unshift, shift, slice, splice

// push appends 1 or more values at the end of array
// push returns the new length of array

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr.push(1000);
displayArray(arr);

arr.push(2000, 3000, 4000);
displayArray(arr);

let rv = arr.push(5000, 6000);
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

// pop removes last value in the array and returns that value

let rv = arr.pop();
displayArray(arr);
console.log(rv);

//miscellaneous

arr[100] = 500; // no array out of index exception, increases the length
displayArray(arr);

arr["kuchbhi"] = 1000; // because every array can be used like an object also
displayArray(arr);
console.log(arr["kuchbhi"]); //will print 1000

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

// unshift adds 1 or more values at the front of array
// unshift returns the new length of array

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr.unshift(1000);
displayArray(arr);

arr.unshift(2000, 3000, 4000);
displayArray(arr);

let rv = arr.unshift(5000, 6000);
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

// shift removes 1 value from the front 
// shift returns the removed value

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

let rv = arr.shift();
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

//rearrange all even elements in the front and odd elements at the end

let arr = [20, 30, 12, 17, 9, 18, 43, 64, 11, 47];
let odd = [];
let even = [];

let i = 0;
while(arr.length > 0){
    let val = arr.shift();
    if(val % 2 == 0){
        even.push(val);
    } else {
        odd.push(val);
    }
}

arr = even.concat(odd);
displayArray(arr);
displayArray(odd);
displayArray(even);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

// slice - like substring
// start is inclusive, end is exclusive

let arr = [10, 20, 30, 40, 50];
let na1 = arr.slice(1, 4); // from 1 to 3 (4 not included)
displayArray(na1); 

let na2 = arr.slice(1); // from 1 to end
displayArray(na2);

let na3 = arr.slice(); // gives the entire array (can be used for cloning)
displayArray(na3);

let na4 = arr.slice(-3, -1); // from -3 to -2
displayArray(na4);

let na5 = arr.slice(-3); // from -3 to end
displayArray(na5);

let na6 = arr.slice(1, -2); // 20, 30
displayArray(na6);

let na7 = arr.slice(-3, 1); // empty array
displayArray(na6);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

//shallow copy in slice(happens in case of an object array only)
let o1 = {
    age : 100
};
let o2 = {
    age : 200
};
let o3 = {
    age : 300
};

let arr = [o1, o2, o3]; //array of objects
let scopy = arr.slice(); // shallow copy of arr

displayArray(arr);
displayArray(scopy);

scopy[0].age = 110; //this change will reflect in the original array too

displayArray(arr);
displayArray(scopy);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

//print all subarrays of an array using slice

let arr = [10, 20, 30, 40];   

for(let i =0; i<arr.length; i++)
{
    for(let j=i+1; j<=arr.length; j++)
    {
        console.log(arr.slice(i,j));
    }
}

//splice function 




//remove all prime numbers in an array using splice

let arr = [1, 10, 20, 2, 3, 11, 30, 40, 5, 7];   
displayArray(arr);
for(let i =arr.length-1; i>0; i--)
{
    if(isPrime(arr[i]) == true)
    arr.splice(i,1);
}
displayArray(arr);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

function isPrime(num)
{
    let c=0;
    for(let i=2; i*i <= num; i++)
    {
        if(num % i == 0)
        c++;
    }
    if(c == 0)
    return true;
    else
    return false;
}
