// Filter is itself a fn
// Filter takes as input a callback fn 
// The callback fn takes 3 parameter (v, i, oarr)
// filter will call the callback multiple times (once for each value)
// for each run of callback, filter will pass v, i and original array to callback
// callback will process the value and index and return a single boolean value for each call to it from filte
// Single value returned by each run of callback will be used by filter
// Whenever a true is received by filter (returned by callback) then filter adds the v to a new array
// Filter returns that new array
// length of returned array is equal to number of trues returned by callback 


let arr = [2, 5, 9, 8, 15, 11, 6];
let oarr = arr.filter(function(v, i, oarr){
    console.log(v + "@" + i + "[" + oarr + "]");
    if(v % 2 == 1){
        return true;
    } else {
        return false;
    }
});

console.log(oarr);



// Custom Filter Function

Array.prototype.myFilter = function(cb){
    let oarr = this;
    let res = [];

    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rbv = cb(v, i, oarr);       //rbv - returned boolean value from the callback

        if(rbv == true){          
            res.push(v);
        }
    }

    return res;
}

let arr = [2, 5, 9, 8, 15, 11, 6];
let oarr = arr.myFilter(function(v, i, oarr){
    console.log(v + "@" + i + "[" + oarr + "]");
    if(v % 2 == 1){
        return true;
    } else {
        return false;
    }
});

console.log(oarr);

//Using filter and map, print ages of all the females

let arr = [
    {name:"A", age: "14", gender: "M"},
    {name:"B", age: "34", gender: "M"},
    {name:"C", age: "24", gender: "F"},
    {name:"D", age: "44", gender: "F"},
    {name:"E", age: "44", gender: "M"},
    {name:"F", age: "28", gender: "F"},
    {name:"G", age: "36", gender: "M"},
    {name:"H", age: "47", gender: "F"}
]

let Farr = arr.filter(function(v, i, oarr){
    if(v.gender == "F")
    return true;
    else
    return false;
})
// console.log(Farr); //details of all the females

let Fages = Farr.map(function(v, i, oarr){
    return v.age;
})

console.log(Fages); //logs age of females