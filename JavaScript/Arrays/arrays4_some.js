// some takes each value 1 by 1 nd returns a true if alteast 1 cb returns true
// return false only if all cb return false

//custom some function
Array.prototype.mySome = function(callback){
    let res = false;
    for(let i =0; i<this.length; i++)
    {
        let v = this[i];
        let rv = callback(v, i, this);
        if(res != true)
        {
            if(rv == true)
            res = true;
        }
    }
    return res;
}

let arr = [
    {name:"A", age: "14", gender: "M"},
    {name:"B", age: "34", gender: "M"},
    {name:"C", age: "40", gender: "F"},
    {name:"D", age: "44", gender: "F"},
    {name:"E", age: "44", gender: "M"},
    {name:"F", age: "38", gender: "F"},
    {name:"G", age: "36", gender: "M"},
    {name:"H", age: "27", gender: "F"}
]

//Is there a valid candidate (F and between 20 and 30)
let rres = arr.filter(function(v, i, oarr){
    return v.gender == 'F';
}).mySome(function(v, i, oarr){
    if(v.age >= 20 && v.age <= 30)
    return true;
    else
    return false;
})

console.log(rres);
