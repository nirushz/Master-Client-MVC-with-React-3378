
//ref type

function getVal1(param1) {
    console.log(`getVal1 - param1 before cahnage: `+param1);
    param1[2] = 9;
    console.log(`getVal1 - param1 afteer cahnage: `+param1);
}


function getVal2(param2) {
    console.log(`getVal2 - param2 before cahnage: `+param2);
    param2 = [3,3,3] ;
    console.log(`getVal2 - param2 afteer cahnage: `+param2);
}

var arr=[1,2,3];
console.log(`Global section - arr before function 1 call: `+arr); 
getVal1(arr);
console.log(`Global section - arr after function 1 call: `+arr);
getVal2(arr);
console.log(`Global section - arr after function 2 call: `+arr);



/*
OUTPUT:
________________
getVal1 - param1 before cahnage: 1,2,3
getVal1 - param1 afteer cahnage: 1,2,9
Global section - arr after function 1 call: 1,2,9
getVal2 - param2 before cahnage: 1,2,9
getVal2 - param2 afteer cahnage: 3,3,3
Global section - arr after function 2 call: 1,2,9
*/ 