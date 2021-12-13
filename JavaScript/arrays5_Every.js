
//custom every function
let arr = [
    {name:"A", age: "14", gender: "M"},
    {name:"B", age: "34", gender: "M"},
    {name:"C", age: "20", gender: "F"},
    {name:"D", age: "24", gender: "F"},
    {name:"E", age: "44", gender: "M"},
    {name:"F", age: "28", gender: "F"},
    {name:"G", age: "36", gender: "M"},
    {name:"H", age: "37", gender: "F"}
]

Array.prototype.myEvery = function(callback){
    let res = true;
    for(let i =0; i<this.length; i++)
    {
        let v = this[i];
        let rv = callback(v, i, this);

        if(rv == false)
        res = false;
    }
    return res;
}

let rres = arr.filter(function(v, i, oarr){
    return v.gender == 'F';
}).myEvery(function(v, i, oarr){
    if(v.age >= 20 && v.age <= 30)
    return true;
    else
    return false;
})

console.log(rres);
