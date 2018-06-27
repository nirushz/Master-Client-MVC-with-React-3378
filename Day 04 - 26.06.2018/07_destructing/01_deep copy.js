

let obj1={
    "name":"Bob",
    "age":12,
    "Hobbies":["Music","Sport","Computers"]
};


let obj2={...obj1};
let obj3=JSON.parse(JSON.stringify(obj1));  // this is deep copy


console.log("obj1",JSON.stringify(obj1));  //--> obj1 {"name":"Bob","age":12,"Hobbies":["Music","Sport","Computers"]}
console.log("obj2",JSON.stringify(obj2));  //--> obj2 {"name":"Bob","age":12,"Hobbies":["Music","Sport","Computers"]}

obj2.age=14;
console.log("obj1",JSON.stringify(obj1));  //--> obj1 {"name":"Bob","age":12,"Hobbies":["Music","Sport","Computers"]}
console.log("obj2",JSON.stringify(obj2));  //--> obj2 {"name":"Bob","age":14,"Hobbies":["Music","Sport","Computers"]}

obj2.Hobbies[0]="React";
console.log("obj1",JSON.stringify(obj1));  //--> obj1 {"name":"Bob","age":12,"Hobbies":["React","Sport","Computers"]}
console.log("obj2",JSON.stringify(obj2));  //--> obj2 {"name":"Bob","age":14,"Hobbies":["React","Sport","Computers"]}
console.log("obj3",JSON.stringify(obj3));  //--> obj3 {"name":"Bob","age":12,"Hobbies":["Music","Sport","Computers"]}


