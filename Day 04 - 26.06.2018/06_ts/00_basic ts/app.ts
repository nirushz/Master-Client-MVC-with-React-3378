


let a1: number = 4;
//a1 = "test"  //Type 'string' is not assignable to type 'number'.	


let a2: string = "Test";
a2 = f1(3, true);

let a3: boolean = true;


let a4: any = 4;
a4 = "hello";
a4 = true; 


function f1(param1:number,param2:boolean) : string{
    return `${param1} and ${param2}`;
}


let dog1: Animal = new Dog(12,"Tom");
let dog2: IWalk = new Dog(12, "Tom");
let dog3: Dog = new Dog(12, "Tom");


console.log((<Dog>dog2).age);  //Down casting
console.log((dog2 as Dog).age);  //Down casting