

let f1=()=>{console.log("f1")};

//if we have only one parameter in the function we can delete the ()
let f2=num=>{console.log("f2 "+num)}


let f3=(num)=>{console.log("f3 "+num)}


let f4=num=>{return num*num};

//if we have in the body only one command
//and command is return - we can delete {return }
let f5=num=> num*num;