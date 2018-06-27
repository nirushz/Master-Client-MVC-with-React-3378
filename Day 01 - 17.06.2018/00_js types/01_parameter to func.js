

//val type

function getVal(param1) {
    console.log(`getVal - param1 before cahnage: `+param1);
    param1 = 4;
    console.log(`getVal - param1 afteer cahnage: `+param1);
}

var num=3;
console.log(`Global section - num before function call: `+num); 
getVal(num);
console.log(`Global section - num after function call: `+num);


/*
OUTPUT:
________________
Global section - num before function call: 3
getVal - param1 before cahnage: 3
getVal - param1 afteer cahnage: 4
Global section - num after function call: 3
*/ 