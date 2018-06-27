

let age = 20;
let fullName = "Bob";

function getNum() {
    return 1;
}

let obj1 = {
    age: age,
    fullName: fullName,
    getNum:getNum
};



let obj2 = {
    age,
    fullName,
    getNum
};


console.log("obj1", obj1);
console.log("obj2", obj2);

console.log("obj1.getNum()", obj1.getNum());
console.log("obj2.getNum()", obj2.getNum());


/*
OUTPUT:
________________
obj1 { age: 20, fullName: 'Bob', getNum: [Function: getNum] }
obj2 { age: 20, fullName: 'Bob', getNum: [Function: getNum] }
obj1.getNum() 1
obj2.getNum() 1

*/