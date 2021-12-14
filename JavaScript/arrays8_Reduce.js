let arr=[10, 20, 30, 40, 50];

let sum1 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
})                                   //this will take ele at 0th idx as pv and ele at 1th idx av cv initially
console.log(sum1);

let sum2 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
}, 5);                               //this will take 5 as pv initially and ele at 0th idx as cv
console.log(sum2);



//custom reduce function

Array.prototype.myReduce = function(callback, val){
 let pv;
 let cv;

 if(val != undefined){
     pv = val;
     for(let i=0; i<this.length; i++)
     {
         cv = this[i];
         let rv = callback(pv, cv, i, this);
         pv = rv;
     }
 }
 else{
     pv = this[0];
     for(let i=1; i<this.length; i++)
     {
         cv = this[i];
         let rv = callback(pv, cv, i, this);
         pv = rv;
     }
 }
    return pv;
}
let sum3 = arr.myReduce(function(pv, cv, ci, oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
},5)  
console.log(sum3);


//count primes using reduce
let arr = [51, 23, 37, 44, 73, 82, 97,45];

let count = arr.reduce(function(pv, cv, ci, oarr){
    if(isPrime(arr[ci]) == true)
    {
        return pv + 1;
    }
    else 
    return pv;
},0)

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
//flatten the 2d array


//find the value of composite function
function f(x)
{
    return x*x;
}
function g(x)
{
    return x+10;
}
function h(x)
{
    return 2*x;
}
let farr = [f, g, h];
let x = 10;

let res = farr.reverse().reduce(function(pv, cv, ci, oarr){
    return cv(x);
},x)

console.log(res);

//union, intersection of array
//sum of squares of ages of all valid candidates