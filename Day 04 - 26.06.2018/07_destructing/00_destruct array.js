

let arr=[11,22,33,44,55,66];

let num1=arr[0];
let num2=arr[1];
let num3=arr[2];

console.log("num1",num1);
console.log("num2",num2);
console.log("num3",num3);


let [n1,n2,n3]=arr;

console.log("n1",n1);  //--> n1 11
console.log("n2",n2);  //--> n2 22
console.log("n3",n3);  //--> n3 33


let test0=[...arr];
let test1=arr;

console.log("arr",arr);   //-->  arr [ 11, 22, 33, 44, 55, 66 ]
console.log("test0",test0);    //-->  test0 [ 11, 22, 33, 44, 55, 66 ]
console.log("test1",test1);    //-->  test1 [ 11, 22, 33, 44, 55, 66 ]


arr[1]=99;
console.log("arr",arr);  //-->  arr [ 11, 99, 33, 44, 55, 66 ]
console.log("test0",test0);   //-->  test0 [ 11, 22, 33, 44, 55, 66 ]
console.log("test1",test1);   //-->  test1 [ 11, 99, 33, 44, 55, 66 ]



