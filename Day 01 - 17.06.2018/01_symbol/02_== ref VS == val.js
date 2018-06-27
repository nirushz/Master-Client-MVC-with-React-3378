

//BY VAL  == CHECKS IF BOTH CONTAIN THE SAME VALUE
let num1=7;
let num2=7;
console.log(`num1== num2 ${num1== num2}`);


let sym1=Symbol();
let sym2=Symbol();
console.log(`sym1== sym2 ${sym1== sym2}`);


//BY REF  == CHECKS IF BOTH CONTAIN THE SAME POINTER IN THE STACK - TO THE HEAP
let arr1=[3,3,3];
let arr2=[3,3,3];
console.log(`arr1== arr2 ${arr1== arr2}`);


/*

OUTPUT:
_______________
num1== num2 true
sym1== sym2 false
arr1== arr2 false

*/
