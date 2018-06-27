

let arr=["a","b","c"];

let obj={
    name:"Alice",
    age:30
}


console.log("-----------------for in (arr)-------------------------");
for(let x in arr){
    console.log(x);
}

console.log("-----------------for of (arr)-------------------------");
for(let x of arr){
    console.log(x);
}




console.log("-----------------for in (obj)-------------------------");
for(let x in obj){
    console.log(x);
}

console.log("-----------------for of (obj)-------------------------");
for(let x of obj){
    console.log(x);
}



/*

OUTPUT:
_______________________________________

-----------------for in (arr)-------------------------
0
1
2
-----------------for of (arr)-------------------------
a
b
c
-----------------for in (obj)-------------------------
name
age
-----------------for of (obj)-------------------------

for(let x of obj){
             ^

TypeError: obj is not iterable
*/