// Map is itself a fn
// Map takes as input a callback fn 
// The callback fn takes 3 parameter (v, i, oarr)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
// length of returned array is equal to original array


let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map(function(v, i, oarr){
    console.log(v + "@" + i + "=[" + oarr + "]");
    return v * v;
});

console.log(sqarr);

//using map, print initials of all the names in an array

//solution 1
let arr = [
    "Jasleen Kaur", 
    "Kunal Chandra", 
    "Bhavleen Kaur", 
    "Karanveer Singh"
];
let sqarr = arr.map(function(v, i, oarr){
    let nameParts = v.split(" ");
    let ni =nameParts[0].charAt(0);
    let sni =nameParts[1].charAt(0);
    
    return ni + "." + sni + ".";
});

console.log(sqarr);

// solution 2
let arr = [
    "Jasleen Kaur", 
    "Kunal Chandra", 
    "Bhavleen Kaur", 
    "Karanveer Singh"
];
let sqarr = arr.map(function(v, i, oarr){
    let ni =v.charAt(0);
    let sni;
    for(let c = 0; c<v.length; c++)
    {
        if(v.charAt(c) == ' ')
        {
            sni = v.charAt(c+1);
            break;
        }
    }
    return ni + "." + sni + ".";
});

console.log(sqarr);

//Use the map function to produce the below output
// return an array with true and false for only females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <= 30

let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
];

let res = arr.map(function(v, i, oarr){
    if(v.gender == 'M')
    return false;
    else if(v.gender == 'F')
    {
        if(v.age >= 20 && v.age <= 30)
        return true;
        else
        return false;
    }
})

console.log(res);


//Custom Map function

Array.prototype.myMap = function(callback){
    let res = [];

    for(let i = 0; i < this.length; i++){
        let v = this[i];
        let rv = callback(v, i, this);
        res.push(rv);
    }

    return res;
}
let arr = [2, 5, 9, 8, 15, 11, 6];

let sqarr = arr.myMap(function(v, i, oarr){
    return v * v;
});
console.log(sqarr);