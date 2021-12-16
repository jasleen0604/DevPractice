let str = "My name is Jasleen Kaur. I am an aspiring software developer. I believe in learning by doing. I need courage and patience.";

"Kaur Jasleen is name My. developer software aspiring an am I. doing by learning in believe I. patience and courage need I.";

// without for loops you have to do it.

let res1 = str.split(".");
console.log(res1);

let res2 = res1.filter(s => s.length > 0);
console.log(res2);

let res3 = res2.map(s => s.trim());
console.log(res3);

let res4 = res3.map(s => s.split(" "));
console.log(res4);

res4.forEach(function(a){
    a.reverse();
})
console.log(res4);

let res5 = res4.map(a => a.join(" "));
console.log(res5);

let res6 = res5.map(s => s + ".");
console.log(res6);

let res7 = res6.reduce(function(pv, cv){
    return pv + " " + cv;
})

console.log(res7);